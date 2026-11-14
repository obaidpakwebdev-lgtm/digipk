
import '../../blogs.css'
import Link from 'next/link'

const BLOG_ID = 'digopk.blogspot.com';

const getPostId = (slugArray) => {
    if (!slugArray) return null;

    for (const part of slugArray) {
        if (/^\d+$/.test(part)) {
            return part;
        }
    }

    return slugArray[0];
};

// Blogger post fetch function
async function getPost(postId) {
    if (!postId) return null;

    try {
        const res = await fetch(
            `https://${BLOG_ID}/feeds/posts/default/${postId}?alt=json`,
            { cache: 'no-store' }
        );

        if (!res.ok) return null;

        const data = await res.json();
        const entry = data.entry;

        if (!entry) return null;

        return {
            title: entry.title?.$t || 'Untitled Blog Post',

            content: entry.content?.$t ||
                entry.summary?.$t || '',

            published: entry.published?.$t || null,

            thumbnail: entry.media$thumbnail?.url || null,

            summary: entry.summary?.$t || ''
        };

    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const postId = getPostId(slug);

    const post = await getPost(postId);

    if (!post) {
        return {
            title: 'Blog Not Found | DigoPK',
            description: 'The requested article could not be found.'
        };
    }

    const description = post.summary
        .replace(/<[^>]*>/g, '')
        .trim()
        .slice(0, 160) || post.title;

    return {
        title: `${post.title} | DigoPK`,
        description,

        openGraph: {
            title: `${post.title} | DigoPK`,
            description,
            type: 'article',
            images: post.thumbnail ? [post.thumbnail] : []
        }
    };
}

export default async function SingleBlog({ params }) {
    const { slug } = await params;
    const postId = getPostId(slug);

    const post = await getPost(postId);

    if (!post) {
        return (
            <div
                className="blog-page"
                style={{
                    textAlign: 'center',
                    paddingTop: '150px',
                    minHeight: '60vh'
                }}
            >
                <h1 style={{
                    fontSize: '40px',
                    marginBottom: '20px',
                    color: 'var(--text-main)'
                }}>
                    Post Not Found
                </h1>

                <p style={{
                    color: 'var(--text-muted)',
                    marginBottom: '30px'
                }}>
                    The article you are looking for does not exist.
                </p>

                <Link href="/blogs" className="btn-solid">
                    Back to Blog
                </Link>
            </div>
        );
    }

    const publishDate = post.published
        ? new Date(post.published).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
        : '';

    // High resolution featured image
    const highResThumbnail = post.thumbnail
        ? post.thumbnail.replace(
            /\/s\d+(-c)?\//,
            '/w1200-h600-c/'
        )
        : null;

    // Remove duplicate featured image from article content
    const cleanContent = post.content.replace(
        /<img\b[^>]*>/gi,
        (img) => {
            const src = img.match(
                /src=["']([^"']+)["']/i
            )?.[1];

            const srcWithoutSize = (url) =>
                url?.replace(/\/s\d+(-c)?\//, '/')
                   .split('?')[0];

            if (
                src &&
                post.thumbnail &&
                srcWithoutSize(src) ===
                srcWithoutSize(post.thumbnail)
            ) {
                return '';
            }

            return img;
        }
    );

    return (
        <div className="single-blog-page">
            <div className="single-container">

                <Link href="/blogs" className="back-link">
                    <i className="fas fa-arrow-left"></i>
                    {' '}Back to Articles
                </Link>

                {/* Blog Header */}
                <div className="single-header">
                    <span className="blog-date">
                        {publishDate}
                    </span>

                    <h1>
                        {post.title || 'Untitled Blog Post'}
                    </h1>
                </div>

                {/* Featured Image - Only Once */}
                {highResThumbnail && (
                    <div className="single-hero-img">
                        <img
                            src={highResThumbnail}
                            alt={post.title}
                        />
                    </div>
                )}

                {/* Blog Content */}
                <div
                    className="single-content"
                    dangerouslySetInnerHTML={{
                        __html: cleanContent
                    }}
                />

                {/* Footer CTA */}
                <div className="single-footer-cta">
                    <h3>
                        Need help with your project?
                    </h3>

                    <p>
                        DigoPK is a premium web development agency.
                        Let's build something amazing together.
                    </p>

                    <Link href="/apply" className="btn-solid">
                        Start Your Project
                    </Link>
                </div>

            </div>
        </div>
    );
}
