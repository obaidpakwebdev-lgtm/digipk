import UseBlogger from 'use-blogger'

const DOMAIN = 'https://digopk.vercel.app'; // Apna asli domain yahan dalein
const BLOG_ID = 'digopk.blogspot.com'; // Apna Blogger URL yahan dalein

const wb = new UseBlogger({
  blogUrl: `https://${BLOG_ID}`,
});

export default async function sitemap() {
    // 1. Aapki website ke static pages ki list
    const staticRoutes = [
        '',
        '/services',
        '/work',
        '/pricing',
        '/contact',
        '/apply',
        '/blogs',
        '/terms',
        '/privacy',
        '/refund',
    ].map((route) => ({
        url: `${DOMAIN}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Blogger se saare dynamic blog posts fetch karna
    let blogRoutes = [];
    try {
        const { data: posts } = await wb.limit(500).fetch(); // 500 posts tak fetch karega
        
        if (posts && posts.length > 0) {
            blogRoutes = posts.map((post) => {
                let postId = post.id;
                if(!postId && post.url) {
                    const urlParts = post.url.split('/');
                    postId = urlParts[urlParts.length - 1].replace('.html', '');
                }
                
                // Title ka chota slug banayein (List page jaisa hi)
                const titleSlug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '').substring(0, 50);

                return {
                    url: `${DOMAIN}/blogs/${titleSlug}/${postId}`,
                    lastModified: post.published ? new Date(post.published).toISOString() : new Date().toISOString(),
                    changeFrequency: 'monthly',
                    priority: 0.7,
                };
            });
        }
    } catch (error) {
        console.error("Error fetching blogs for sitemap:", error);
    }

    // Dono lists ko mila dein
    return [...staticRoutes, ...blogRoutes];
}