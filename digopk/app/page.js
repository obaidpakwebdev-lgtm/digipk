export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="pill-badge">
              <span className="dot" /> Top Web Developer Karachi &amp; Pakistan
            </div>
            <h1 className="hero-title">
              We Build <span className="text-gradient">Websites</span> &amp; Digital
              Experiences That Convert.
            </h1>
            <p className="hero-desc">
              DigoPK is a full-service digital agency based in{" "}
              <strong>Karachi, Pakistan</strong>. We specialize in high-performance{" "}
              <strong>web development</strong>, while also offering{" "}
              <strong>SEO, Graphic Design, and Video Editing</strong> to scale your
              business globally. Looking for a{" "}
              <strong>web developer in Karachi</strong> or{" "}
              <strong>digital marketing in Pakistan</strong>? You're in the right
              place.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-solid">
                Get a Free Quote
              </a>
              <a href="#work" className="btn-ghost">
                View Our Work <i className="fas fa-arrow-down" />
              </a>
            </div>
            <div className="trusted-by">
              <p>Trusted by innovative brands</p>
              <div className="logos">
                <span>
                  <i className="fab fa-react" /> React
                </span>
                <span>
                  <i className="fab fa-node-js" /> Node
                </span>
                <span>
                  <i className="fab fa-wordpress" /> WP
                </span>
                <span>
                  <i className="fab fa-figma" /> Figma
                </span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="DigoPK Team Working – Top Web Developer Karachi Pakistan"
                className="hero-main-img"
              />
              <div className="glass-card card-1">
                <div className="card-icon">
                  <i className="fas fa-code" />
                </div>
                <h4>Clean Code</h4>
                <p>100% Scalable</p>
              </div>
              <div className="glass-card card-2">
                <div className="card-icon">
                  <i className="fas fa-chart-line" />
                </div>
                <h4>SEO Optimized</h4>
                <p>Rank #1 on Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          <span>WEB DEVELOPMENT</span> <i className="fas fa-star" />
          <span>UI/UX DESIGN</span> <i className="fas fa-star" />
          <span>SEO &amp; MARKETING</span> <i className="fas fa-star" />
          <span>GRAPHIC DESIGN</span> <i className="fas fa-star" />
          <span>VIDEO EDITING</span> <i className="fas fa-star" />
          <span>E-COMMERCE</span> <i className="fas fa-star" />
          <span>WEB DEVELOPMENT</span> <i className="fas fa-star" />
          <span>UI/UX DESIGN</span> <i className="fas fa-star" />
          <span>SEO &amp; MARKETING</span> <i className="fas fa-star" />
        </div>
      </div>
      {/* About Us Section */}
      <section className="about" id="about">
        <div className="section-header">
          <h2>
            Why Choose <span className="text-gradient">DigoPK?</span>
          </h2>
          <p>
            We don't just build websites; we build digital growth engines for your
            business.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h3>Your Success is Our Only Metric.</h3>
            <p>
              Based in <strong>Karachi, Pakistan</strong>, serving globally. We are
              a team of passionate developers, designers, and marketers who live and
              breathe the web. Whether you need a simple landing page or a complex
              SaaS platform, we deliver excellence. As a leading{" "}
              <strong>web developer in Karachi</strong> and{" "}
              <strong>digital marketing agency in Pakistan</strong>, we help brands
              grow online.
            </p>
            <ul className="about-list">
              <li>
                <i className="fas fa-check-circle" />{" "}
                <strong>Experienced Team:</strong> 5+ years of industry experience.
              </li>
              <li>
                <i className="fas fa-check-circle" />{" "}
                <strong>On-Time Delivery:</strong> We respect your deadlines.
              </li>
              <li>
                <i className="fas fa-check-circle" /> <strong>24/7 Support:</strong>{" "}
                We are always here for you.
              </li>
              <li>
                <i className="fas fa-check-circle" />{" "}
                <strong>Affordable Pricing:</strong> Premium quality without the
                premium price tag.
              </li>
            </ul>
            <a href="#contact" className="btn-solid">
              Work With Us
            </a>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>150+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section (Bento Box) */}
      <section className="services" id="services">
        <div className="section-header">
          <h2>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p>Everything you need to dominate the digital world.</p>
        </div>
        <div className="bento-grid">
          {/* Large Feature (Web Dev) */}
          <div className="bento-item large">
            <div className="bento-content">
              <div className="bento-icon">
                <i className="fas fa-laptop-code" />
              </div>
              <h3>
                Web Development <span className="badge-main">Core Focus</span>
              </h3>
              <p>
                From complex web applications to stunning corporate sites, we write
                clean, scalable code using React, Next.js, and WordPress. Top{" "}
                <strong>web developer Karachi</strong> &amp;
                <strong>Pakistan</strong> for custom web apps.
              </p>
              <ul className="bento-list">
                <li>
                  <i className="fas fa-check-circle" /> Custom Web Apps
                </li>
                <li>
                  <i className="fas fa-check-circle" /> E-Commerce Stores
                </li>
                <li>
                  <i className="fas fa-check-circle" /> Landing Pages
                </li>
              </ul>
              <a href="#contact" className="bento-link">
                Start Web Project <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="bento-bg" />
          </div>
          {/* Small Feature 1 */}
          <div className="bento-item small">
            <div className="bento-icon">
              <i className="fas fa-magnifying-glass-chart" />
            </div>
            <h3>SEO &amp; Marketing</h3>
            <p>
              Rank higher on Google, run profitable ad campaigns, and get more
              traffic. <strong>Digital marketing Pakistan</strong> experts.
            </p>
          </div>
          {/* Small Feature 2 */}
          <div className="bento-item small">
            <div className="bento-icon">
              <i className="fas fa-pen-nib" />
            </div>
            <h3>Graphic Design</h3>
            <p>
              Logos, social media posts, and branding that stand out.{" "}
              <strong>Graphic design Karachi</strong> &amp;
              <strong>Pakistan</strong>.
            </p>
          </div>
          {/* Wide Feature */}
          <div className="bento-item wide">
            <div className="bento-icon">
              <i className="fas fa-video" />
            </div>
            <div>
              <h3>Video Editing &amp; Motion Graphics</h3>
              <p>
                Engaging reels, YouTube videos, and animated ads to capture
                attention. <strong>Video editing Pakistan</strong> services.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Work / Portfolio Section */}
      <section className="work" id="work">
        <div className="section-header">
          <h2>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p>Some of our recent digital creations for clients worldwide.</p>
        </div>
        <div className="work-list">
          {/* Project 1 (Web Dev) */}
          <div className="work-row">
            <div className="work-img">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop"
                alt="E-Commerce Store Development Karachi – Web Developer Pakistan"
              />
            </div>
            <div className="work-info">
              <span className="work-category">Web Dev / E-Commerce</span>
              <h3>Fashion Store Pakistan</h3>
              <p>
                A complete online store with secure payment integration, inventory
                management, and a lightning-fast user interface.
              </p>
              <a href="#" className="btn-ghost">
                View Case Study <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
          {/* Project 2 (SaaS) */}
          <div className="work-row reverse">
            <div className="work-img">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="SaaS Dashboard – React Node.js Web App Karachi Pakistan"
              />
            </div>
            <div className="work-info">
              <span className="work-category">Web App / React &amp; Node.js</span>
              <h3>TechCorp Analytics Dashboard</h3>
              <p>
                A highly scalable analytics dashboard for a US-based tech company,
                featuring real-time data visualization and user management.
              </p>
              <a href="#" className="btn-ghost">
                View Case Study <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
          {/* Project 3 (Agency/Branding) */}
          <div className="work-row">
            <div className="work-img">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop"
                alt="Branding and Design – Graphic Design Karachi Pakistan"
              />
            </div>
            <div className="work-info">
              <span className="work-category">Branding / Graphic Design</span>
              <h3>FoodHub Brand Identity</h3>
              <p>
                Complete brand identity design including logo, packaging, and social
                media creatives for a new fast-food chain.
              </p>
              <a href="#" className="btn-ghost">
                View Case Study <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="section-header">
          <h2>
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p>Choose the perfect plan for your business needs.</p>
        </div>
        <div className="pricing-grid">
          {/* Starter */}
          <div className="price-card">
            <h3>Starter Website</h3>
            <div className="price">
              PKR 35k<span>/project</span>
            </div>
            <p className="price-desc">
              Perfect for small businesses and personal brands.
            </p>
            <ul className="price-features">
              <li>
                <i className="fas fa-check" /> 5 Pages Website
              </li>
              <li>
                <i className="fas fa-check" /> Mobile Responsive
              </li>
              <li>
                <i className="fas fa-check" /> Contact Form
              </li>
              <li>
                <i className="fas fa-check" /> Basic SEO Setup
              </li>
            </ul>
            <a href="#contact" className="btn-ghost full-width">
              Get Started
            </a>
          </div>
          {/* Business (Popular) */}
          <div className="price-card popular">
            <div className="pop-badge">Most Popular</div>
            <h3>Business / E-Com</h3>
            <div className="price">
              PKR 85k<span>/project</span>
            </div>
            <p className="price-desc">
              Ideal for growing businesses and online stores.
            </p>
            <ul className="price-features">
              <li>
                <i className="fas fa-check" /> 10+ Pages / E-Commerce
              </li>
              <li>
                <i className="fas fa-check" /> Custom UI/UX Design
              </li>
              <li>
                <i className="fas fa-check" /> Payment Gateway Integrations
              </li>
              <li>
                <i className="fas fa-check" /> Advanced SEO Setup
              </li>
              <li>
                <i className="fas fa-check" /> Speed Optimization
              </li>
            </ul>
            <a href="#contact" className="btn-solid full-width">
              Start Project
            </a>
          </div>
          {/* Enterprise */}
          <div className="price-card">
            <h3>Custom Web App</h3>
            <div className="price">Custom</div>
            <p className="price-desc">
              For complex SaaS platforms and enterprise systems.
            </p>
            <ul className="price-features">
              <li>
                <i className="fas fa-check" /> Unlimited Pages
              </li>
              <li>
                <i className="fas fa-check" /> Custom API Integrations
              </li>
              <li>
                <i className="fas fa-check" /> Admin Dashboard
              </li>
              <li>
                <i className="fas fa-check" /> Dedicated Support
              </li>
            </ul>
            <a href="#contact" className="btn-ghost full-width">
              Book a Call
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p>Don't just take our word for it.</p>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p>
              "DigoPK completely transformed our online store. The design is
              stunning and our sales have doubled since launch. Highly recommended!"
            </p>
            <div className="testi-author">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                alt="Client"
              />
              <div>
                <h4>Bilal Ahmed</h4>
                <span>CEO, FashionHub</span>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p>
              "They built a complex dashboard for our SaaS in record time. Their
              communication was excellent, and the code quality is top-notch."
            </p>
            <div className="testi-author">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                alt="Client"
              />
              <div>
                <h4>Sarah Khan</h4>
                <span>Founder, TechStart</span>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p>
              "From logo design to a full WordPress website, they handled everything
              perfectly. The team is professional, creative, and on time."
            </p>
            <div className="testi-author">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                alt="Client"
              />
              <div>
                <h4>Usman Tariq</h4>
                <span>Owner, FoodHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="process" id="process">
        <div className="section-header">
          <h2>
            How We <span className="text-gradient">Work</span>
          </h2>
          <p>A simple, transparent process from idea to launch.</p>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-num">01</div>
            <h3>Discovery</h3>
            <p>
              We understand your business goals, target audience, and requirements.
            </p>
          </div>
          <div className="process-step">
            <div className="step-num">02</div>
            <h3>Design</h3>
            <p>
              We create wireframes and stunning UI/UX designs for your approval.
            </p>
          </div>
          <div className="process-step">
            <div className="step-num">03</div>
            <h3>Development</h3>
            <p>
              Our developers write clean, secure, and scalable code for your
              project.
            </p>
          </div>
          <div className="process-step">
            <div className="step-num">04</div>
            <h3>Launch &amp; Support</h3>
            <p>
              We deploy your website and provide ongoing maintenance and SEO
              support.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="section-header">
          <h2>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p>Got questions? We've got answers.</p>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <h3>How long does it take to build a website?</h3>
              <i className="fas fa-plus" />
            </div>
            <div className="faq-answer">
              <p>
                A standard 5-page website takes 1-2 weeks. E-commerce stores or
                custom web apps can take 4-8 weeks depending on the complexity and
                features required.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>Do you provide website maintenance?</h3>
              <i className="fas fa-plus" />
            </div>
            <div className="faq-answer">
              <p>
                Yes, we offer ongoing maintenance packages that include regular
                updates, security checks, backups, and technical support to keep
                your site running smoothly.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>Will my website be mobile-friendly?</h3>
              <i className="fas fa-plus" />
            </div>
            <div className="faq-answer">
              <p>
                Absolutely. All our websites are built with a "mobile-first"
                approach, ensuring they look and function perfectly on smartphones,
                tablets, and desktops.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>Do you offer SEO services?</h3>
              <i className="fas fa-plus" />
            </div>
            <div className="faq-answer">
              <p>
                Yes, basic on-page SEO is included in all our web packages. We also
                offer advanced monthly SEO and digital marketing services to help
                you rank higher on Google.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to scale your business?</h2>
          <p>
            Let's discuss your project and build something amazing together. No
            obligation, just great ideas.
          </p>
          <a href="#contact" className="btn-solid large-btn">
            Book a Free Consultation
          </a>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="section-header">
          <h2>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p>
            Have a project in mind? Drop us a message and we'll get back to you
            within 24 hours.
          </p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-details">
            <div className="detail-box">
              <i className="fas fa-envelope" />
              <div>
                <h4>Email Us</h4>
                <p>motech508@gmail.com</p>
              </div>
            </div>
            <div className="detail-box">
              <i className="fas fa-phone" />
              <div>
                <h4>Call Us</h4>
                <p>0310 7454676</p>
              </div>
            </div>
            <div className="detail-box">
              <i className="fab fa-whatsapp" />
              <div>
                <h4>WhatsApp</h4>
                <p>0310 7454676</p>
              </div>
            </div>
            <div className="detail-box">
              <i className="fas fa-map-marker-alt" />
              <div>
                <h4>Office</h4>
                <p>Gulshan-e-Iqbal, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
          {/* ===== FORM WITH FORMSUBMIT API ===== */}
          <form
            className="contact-form"
            id="contactForm"
            action="https://formsubmit.co/motech508@gmail.com"
            method="POST"
          >
            {/* FormSubmit configuration */}
            <input type="hidden" name="_captcha" defaultValue="false" />
            <input
              type="hidden"
              name="_subject"
              defaultValue="New Project Inquiry from DigoPK Website"
            />
            <input type="hidden" name="_template" defaultValue="table" />
            <input
              type="hidden"
              name="_next"
              defaultValue="https://digopk.vercel.app/thank-you.html"
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required=""
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required=""
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required=""
              />
              <select name="service" required="">
                <option value="">Select Service</option>
                <option>Web Development</option>
                <option>WordPress / E-Commerce</option>
                <option>SEO &amp; Marketing</option>
                <option>Graphic Design</option>
                <option>Video Editing</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project *"
              rows={6}
              required=""
              defaultValue={""}
            />
            <button type="submit" className="btn-solid">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}