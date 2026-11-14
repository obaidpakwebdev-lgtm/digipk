export const metadata = {
  title: 'Our Portfolio | Web & E-Commerce Projects | DigoPK',
  description: 'Explore the portfolio of DigoPK, the top web development agency in Karachi. View our latest custom web apps, e-commerce stores, and branding projects.',
  alternates: {
    canonical: 'https://digopk.vercel.app/work',
  },
};

export default function Work() {
    return (
        <div className="work-page">
            {/* Hero */}
            <section className="sub-hero">
                <div className="pill-badge"><span className="dot"></span> Our Portfolio</div>
                <h1 className="hero-title" style={{ fontSize: '54px', marginBottom: '20px' }}>
                    Digital Creations <span className="text-gradient">That Matter</span>
                </h1>
                <p className="hero-desc" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                    A showcase of our recent projects. We don't just build websites; we build digital experiences that drive real business results.
                </p>
            </section>

            {/* Projects Gallery Grid */}
            <section className="portfolio-gallery">
                
                {/* Project 1 */}
                <div className="gallery-item">
                    <div className="gallery-img">
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop" alt="Fashion E-Commerce Store" />
                    </div>
                    <div className="gallery-info">
                        <span className="work-category">E-Commerce / WordPress</span>
                        <h3>Fashion Store Pakistan</h3>
                        <p>A complete online clothing store with inventory management, secure checkout, and a custom built theme.</p>
                        <a href="/apply" className="btn-ghost">View Case Study <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="gallery-item">
                    <div className="gallery-img">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="SaaS Analytics Dashboard" />
                    </div>
                    <div className="gallery-info">
                        <span className="work-category">Web App / React & Node.js</span>
                        <h3>TechCorp Analytics</h3>
                        <p>A highly scalable SaaS dashboard for a US-based startup. Features real-time data visualization and user roles.</p>
                        <a href="/apply" className="btn-ghost">View Case Study <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="gallery-item">
                    <div className="gallery-img">
                        <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop" alt="Brand Identity Design" />
                    </div>
                    <div className="gallery-info">
                        <span className="work-category">Branding / Graphic Design</span>
                        <h3>FoodHub Identity</h3>
                        <p>Complete visual identity for a fast-food chain, including logo design, packaging, and social media templates.</p>
                        <a href="/apply" className="btn-ghost">View Case Study <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="gallery-item">
                    <div className="gallery-img">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" alt="Corporate Website" />
                    </div>
                    <div className="gallery-info">
                        <span className="work-category">Web Design / Next.js</span>
                        <h3>Business Consultant Firm</h3>
                        <p>A professional corporate website built for a Karachi-based consulting firm to generate more B2B leads.</p>
                        <a href="/apply" className="btn-ghost">View Case Study <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section" style={{ padding: '0 20px' }}>
                <div className="cta-box">
                    <h2>Want to be our next success story?</h2>
                    <p>Let's discuss how we can build a website that grows your business.</p>
                    <a href="/apply" className="btn-solid large-btn">Start Your Project</a>
                </div>
            </section>
        </div>
    )
}