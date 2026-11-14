
import '../blogs.css'
import Link from 'next/link'

const BLOG_ID = 'digopk.blogspot.com';

export const metadata = {
    title: 'Blog | DigoPK',
    description: 'Read our latest articles on web development, SEO, and digital marketing.',
};

const createSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
};

export default async function BlogList() {
    let posts = [];

    try {
        const res = await fetch(
            `https://${BLOG_ID}/feeds/posts/default?alt=json&max-results=50`,
            { cache: 'no-store' }
        );

        if (!res.ok) {
            throw new Error('Blogger feed fetch failed');
        }

        const data = await res.json();

        posts = (data.feed?.entry || []).map((entry) => {
            const title = entry.title?.$t || 'Untitled';

            const postId = entry.id.$t.split('-').pop();

            const alternateLink = entry.link?.find(
                (link) => link.rel === 'alternate'
            )?.href;

            const thumbnail = entry.media$thumbnail?.url
                ?.replace(/\/s\d+(-c)?\//, '/w800-h500-c/');

            return {
                id: postId,
                title,
                url: alternateLink,
                thumbnail,
                published: entry.published?.$t,
            };
        });

    } catch (error) {
        console.error('Blogger Error:', error);
    }

    return (
        <div className="blog-page">
            <section className="sub-hero">
                <div className="pill-badge">
                    <span className="dot"></span> Our Insights
                </div>

                <h1 className="hero-title" style={{
                    fontSize: '54px',
                    marginBottom: '20px'
                }}>
                    Latest <span className="text-gradient">Articles</span>
                </h1>
            </section>

            <section className="blog-grid-container">
                <div className="blog-grid">

                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="blog-card">

                                {post.thumbnail && (
                                    <div className="blog-img">
                                        <img
                                            src={post.thumbnail}
                                            alt={post.title}
                                        />
                                    </div>
                                )}

                                <div className="blog-info">

                                    <span className="blog-date">
                                        {post.published
                                            ? new Date(post.published).toLocaleDateString(
                                                'en-US',
                                                {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                }
                                            )
                                            : 'Recent'}
                                    </span>

                                    <h3>{post.title}</h3>

                                    <Link
                                        href={`/blogs/${createSlug(post.title)}/${post.id}`}
                                        className="btn-ghost"
                                    >
                                        Read Article
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{
                            color: 'var(--text-muted)',
                            textAlign: 'center',
                            gridColumn: '1 / -1'
                        }}>
                            No posts found. Please check your Blogger URL.
                        </p>
                    )}

                </div>
            </section>
        </div>
    );
}
