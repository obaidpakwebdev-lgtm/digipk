import Link from 'next/link'

export const metadata = {
  title: 'Premium Web Development & Digital Services | DigoPK Karachi',
  description: 'Looking for the best web developer in Karachi? DigoPK offers custom web development, WordPress, SEO, graphic design, and video editing services to scale your business globally.',
  keywords: 'web development karachi, wordpress developer, seo services pakistan, ecommerce website karachi, digital agency pakistan, graphic design, video editing',
  alternates: {
    canonical: 'https://digopk.vercel.app/services',
  },
};

export default function Services() {
    return (
        <div className="services-page">
            
            {/* Hero Section */}
            <section className="sub-hero">
                <div className="pill-badge"><span className="dot"></span> Our Expertise</div>
                <h1 className="hero-title" style={{ fontSize: '54px', marginBottom: '20px' }}>
                    Solutions That <span className="text-gradient">Drive Growth</span>
                </h1>
                <p className="hero-desc" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                    We don't just build websites; we engineer digital experiences. From high-performance web apps to complete brand identities, DigoPK is your one-stop digital agency in Pakistan.
                </p>
                <div className="hero-actions" style={{ justifyContent: 'center' }}>
                    <Link href="/apply" className="btn-solid">Start Your Project</Link>
                    <a href="#pricing" className="btn-ghost">View Pricing <i className="fas fa-arrow-down"></i></a>
                </div>
            </section>

            {/* Bento Grid (Core Services) */}
            <section className="services-section">
                <div className="bento-grid">
                    
                    {/* Large Card (Web Dev) */}
                    <div className="bento-item large">
                        <div className="bento-content">
                            <div className="bento-icon"><i className="fas fa-laptop-code"></i></div>
                            <h3>Web Development <span className="badge-main">Core Focus</span></h3>
                            <p>Custom-coded, lightning-fast websites. We use Next.js, React, and Node.js to build scalable platforms that don't just look good, but perform flawlessly.</p>
                            <ul className="bento-list">
                                <li><i className="fas fa-check-circle"></i> Custom Web Applications (SaaS)</li>
                                <li><i className="fas fa-check-circle"></i> E-Commerce (Shopify, WooCommerce)</li>
                                <li><i className="fas fa-check-circle"></i> Corporate Business Websites</li>
                                <li><i className="fas fa-check-circle"></i> API Integrations & CRM Systems</li>
                            </ul>
                            <Link href="/apply" className="btn-solid" style={{ marginTop: '20px' }}>Start Web Project</Link>
                        </div>
                    </div>

                    {/* Small Cards */}
                    <div className="bento-item small">
                        <div className="bento-icon"><i className="fas fa-wordpress"></i></div>
                        <h3>WordPress</h3>
                        <p>Custom themes, plugins, and speed optimization.</p>
                    </div>

                    <div className="bento-item small">
                        <div className="bento-icon"><i className="fas fa-magnifying-glass-chart"></i></div>
                        <h3>SEO & Marketing</h3>
                        <p>Rank higher on Google and get organic traffic.</p>
                    </div>

                    <div className="bento-item wide">
                        <div className="bento-icon"><i className="fas fa-cart-shopping"></i></div>
                        <div>
                            <h3>E-Commerce Stores</h3>
                            <p>Complete online stores with payment gateways, inventory, and fast checkout.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services Breakdown (Long Content for SEO) */}
            <section className="detailed-services">
                <div className="section-header">
                    <h2>What We <span className="text-gradient">Deliver</span></h2>
                    <p>Comprehensive digital solutions tailored to your business needs.</p>
                </div>

                {/* Service 1: Web Dev */}
                <div className="service-detail-row">
                    <div className="service-detail-text">
                        <h3>High-Performance Web Development</h3>
                        <p>In today's digital age, a slow website means lost customers. As a top <strong>web developer in Karachi</strong>, we specialize in building ultra-fast, SEO-friendly websites using modern frameworks like React, Next.js, and Laravel.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-bolt"></i> <strong>Speed Optimization:</strong> 90+ Google PageSpeed score guaranteed.</li>
                            <li><i className="fas fa-mobile-alt"></i> <strong>Mobile-First Design:</strong> Perfectly responsive on all devices.</li>
                            <li><i className="fas fa-lock"></i> <strong>Secure Code:</strong> Protection against SQL injection and XSS attacks.</li>
                        </ul>
                    </div>
                    <div className="service-detail-img">
                        <i className="fas fa-code"></i>
                    </div>
                </div>

                {/* Service 2: SEO */}
                <div className="service-detail-row reverse">
                    <div className="service-detail-text">
                        <h3>SEO & Digital Marketing</h3>
                        <p>You can have the most beautiful website, but if no one finds it, it's useless. Our <strong>digital marketing experts in Pakistan</strong> ensure your business ranks on the first page of Google for keywords that actually drive sales.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-search"></i> <strong>On-Page SEO:</strong> Meta tags, schema, and content optimization.</li>
                            <li><i className="fas fa-link"></i> <strong>Off-Page SEO:</strong> High-quality backlink building.</li>
                            <li><i className="fas fa-chart-line"></i> <strong>Google Ads & PPC:</strong> Profitable ad campaigns with real ROI.</li>
                        </ul>
                    </div>
                    <div className="service-detail-img">
                        <i className="fas fa-chart-pie"></i>
                    </div>
                </div>

                {/* Service 3: UI/UX & Graphic */}
                <div className="service-detail-row">
                    <div className="service-detail-text">
                        <h3>UI/UX Design & Branding</h3>
                        <p>First impressions matter. We design stunning, user-centric interfaces and complete brand identities that leave a lasting impression on your users. From your logo to your app interface, we handle it all.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-pen-nib"></i> <strong>Logo & Brand Identity:</strong> Colors, typography, and brand guidelines.</li>
                            <li><i className="fas fa-object-group"></i> <strong>UI/UX Prototyping:</strong> Figma designs for web and mobile apps.</li>
                            <li><i className="fas fa-palette"></i> <strong>Social Media Creatives:</strong> Engaging posts for Instagram, Facebook, and LinkedIn.</li>
                        </ul>
                    </div>
                    <div className="service-detail-img">
                        <i className="fas fa-palette"></i>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="tech-stack">
                <div className="section-header">
                    <h2>Technologies <span className="text-gradient">We Master</span></h2>
                    <p>We use industry-leading tools to build future-proof solutions.</p>
                </div>
                <div className="tech-grid">
                    <div className="tech-item"><i className="fab fa-react"></i><span>React</span></div>
                    <div className="tech-item"><i className="fab fa-node-js"></i><span>Node.js</span></div>
                    <div className="tech-item"><i className="fab fa-wordpress"></i><span>WordPress</span></div>
                    <div className="tech-item"><i className="fab fa-figma"></i><span>Figma</span></div>
                    <div className="tech-item"><i className="fab fa-js"></i><span>JavaScript</span></div>
                    <div className="tech-item"><i className="fas fa-database"></i><span>MongoDB</span></div>
                    <div className="tech-item"><i className="fab fa-html5"></i><span>HTML5</span></div>
                    <div className="tech-item"><i className="fab fa-css3-alt"></i><span>CSS3</span></div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section" style={{ padding: '0 20px' }}>
                <div className="cta-box">
                    <h2>Ready to discuss your project?</h2>
                    <p>Let's build something amazing together. Get a free consultation today.</p>
                    <Link href="/apply" className="btn-solid large-btn">Apply Now</Link>
                </div>
            </section>

        </div>
    )
}