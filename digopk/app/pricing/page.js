export const metadata = {
  title: 'Transparent Pricing | Web Development & SEO Packages | DigoPK',
  description: 'View affordable pricing packages for web development, e-commerce, and digital marketing services by DigoPK, Karachi. No hidden charges.',
  keywords: 'web development pricing karachi, ecommerce website cost pakistan, seo packages, digital agency rates',
  alternates: {
    canonical: 'https://digopk.vercel.app/pricing',
  },
};

export default function Pricing() {
    return (
        <div className="pricing-page">
            
            {/* Hero Section */}
            <section className="sub-hero">
                <div className="pill-badge"><span className="dot"></span> Simple & Transparent</div>
                <h1 className="hero-title" style={{ fontSize: '54px', marginBottom: '20px' }}>
                    Choose Your <span className="text-gradient">Perfect Plan</span>
                </h1>
                <p className="hero-desc" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                    No hidden fees. No surprises. Just premium quality work at affordable rates. Pick a package that fits your business needs.
                </p>
            </section>

            {/* Web Development Packages */}
            <section className="pricing-section">
                <div className="section-header">
                    <h2>Web <span className="text-gradient">Development</span></h2>
                    <p>Custom websites built for speed, SEO, and conversions.</p>
                </div>
                
                <div className="pricing-grid">
                    {/* Starter */}
                    <div className="price-card">
                        <h3>Starter Website</h3>
                        <div className="price">PKR 35k<span>/project</span></div>
                        <p className="price-desc">Perfect for small businesses and personal brands.</p>
                        <ul className="price-features">
                            <li><i className="fas fa-check"></i> 5 Pages Custom Website</li>
                            <li><i className="fas fa-check"></i> Mobile Responsive Design</li>
                            <li><i className="fas fa-check"></i> Contact Form Integration</li>
                            <li><i className="fas fa-check"></i> Basic On-Page SEO</li>
                            <li><i className="fas fa-check"></i> 1 Month Free Support</li>
                        </ul>
                        <a href="/apply" className="btn-ghost full-width">Get Started</a>
                    </div>

                    {/* Business (Popular) */}
                    <div className="price-card popular">
                        <div className="pop-badge">Most Popular</div>
                        <h3>Business / E-Com</h3>
                        <div className="price">PKR 85k<span>/project</span></div>
                        <p className="price-desc">Ideal for growing businesses and online stores.</p>
                        <ul className="price-features">
                            <li><i className="fas fa-check"></i> 10+ Pages / E-Commerce</li>
                            <li><i className="fas fa-check"></i> Custom UI/UX Design (Figma)</li>
                            <li><i className="fas fa-check"></i> Payment Gateway Integration</li>
                            <li><i className="fas fa-check"></i> Advanced SEO Setup</li>
                            <li><i className="fas fa-check"></i> Speed Optimization</li>
                            <li><i className="fas fa-check"></i> 3 Months Free Support</li>
                        </ul>
                        <a href="/apply" className="btn-solid full-width">Start Project</a>
                    </div>

                    {/* Enterprise */}
                    <div className="price-card">
                        <h3>Custom Web App</h3>
                        <div className="price">Custom</div>
                        <p className="price-desc">For complex SaaS platforms and enterprise systems.</p>
                        <ul className="price-features">
                            <li><i className="fas fa-check"></i> Unlimited Pages</li>
                            <li><i className="fas fa-check"></i> Custom API Integrations</li>
                            <li><i className="fas fa-check"></i> Admin Dashboard & CRM</li>
                            <li><i className="fas fa-check"></i> Dedicated Project Manager</li>
                            <li><i className="fas fa-check"></i> Priority 24/7 Support</li>
                        </ul>
                        <a href="/apply" className="btn-ghost full-width">Book a Call</a>
                    </div>
                </div>
            </section>

            {/* Digital Marketing & SEO Packages */}
            <section className="pricing-section" style={{ marginTop: '80px' }}>
                <div className="section-header">
                    <h2>SEO & <span className="text-gradient">Marketing</span></h2>
                    <p>Monthly retainers to grow your organic traffic.</p>
                </div>
                
                <div className="pricing-grid">
                    {/* Basic SEO */}
                    <div className="price-card">
                        <h3>Basic SEO</h3>
                        <div className="price">PKR 25k<span>/month</span></div>
                        <p className="price-desc">For new websites looking to get indexed.</p>
                        <ul className="price-features">
                            <li><i className="fas fa-check"></i> On-Page SEO (10 Keywords)</li>
                            <li><i className="fas fa-check"></i> Google Search Console Setup</li>
                            <li><i className="fas fa-check"></i> Basic Backlink Building</li>
                            <li><i className="fas fa-check"></i> Monthly Performance Report</li>
                        </ul>
                        <a href="/apply" className="btn-ghost full-width">Start SEO</a>
                    </div>

                    {/* Standard SEO (Popular) */}
                    <div className="price-card popular">
                        <div className="pop-badge">Best Value</div>
                        <h3>Standard SEO</h3>
                        <div className="price">PKR 50k<span>/month</span></div>
                        <p className="price-desc">For businesses wanting to rank on Page 1.</p>
                        <ul className="price-features">
                            <li><i className="fas fa-check"></i> On-Page SEO (25 Keywords)</li>
                            <li><i className="fas fa-check"></i> Technical SEO Audit & Fixes</li>
                            <li><i className="fas fa-check"></i> High-Quality Link Building</li>
                            <li><i className="fas fa-check"></i> Competitor Analysis</li>
                            <li><i className="fas fa-check"></i> Bi-Weekly Reports</li>
                        </ul>
                        <a href="/apply" className="btn-solid full-width">Boost Traffic</a>
                    </div>

                    {/* Social Media */}
                    <div className="price-card">
                        <h3>Social Media</h3>
                        <div className="price">PKR 40k<span>/month</span></div>
                        <p className="price-desc">Complete social media management.</p>
                        <ul className="price-features">
                            <li><i className="fas fa-check"></i> 15 Custom Post Designs</li>
                            <li><i className="fas fa-check"></i> Reels / Video Editing (4)</li>
                            <li><i className="fas fa-check"></i> Caption Writing & Hashtags</li>
                            <li><i className="fas fa-check"></i> Page Optimization</li>
                        </ul>
                        <a href="/apply" className="btn-ghost full-width">Get Started</a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="pricing-faq" style={{ maxWidth: '800px', margin: '80px auto 0', padding: '0 20px' }}>
                <div className="section-header">
                    <h2>Pricing <span className="text-gradient">FAQs</span></h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: 'var(--surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Do you take advance payment?</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Yes, we require 50% advance to start the project, and the remaining 50% upon completion.</p>
                    </div>
                    <div className="faq-item" style={{ background: 'var(--surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Are there any hidden charges?</h3>
                        <p style={{ color: 'var(--text-muted)' }}>No. The quoted price includes everything mentioned in the package. Domain and hosting are billed separately at actual cost.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}