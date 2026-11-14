export const metadata = {
  title: 'Contact Us | Get a Free Quote | DigoPK Karachi',
  description: 'Get in touch with DigoPK, the leading web development and digital marketing agency in Karachi, Pakistan. Contact us for a free project quote.',
  alternates: {
    canonical: 'https://digopk.vercel.app/contact',
  },
};

export default function Contact() {
    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="sub-hero">
                <div className="pill-badge"><span className="dot"></span> We're Here to Help</div>
                <h1 className="hero-title" style={{ fontSize: '54px', marginBottom: '20px' }}>
                    Let's Build <span className="text-gradient">Together</span>
                </h1>
                <p className="hero-desc" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                    Have a project in mind? Need a quote? Or just want to say hi? Drop us a message and our team will get back to you within 24 hours.
                </p>
            </section>

            {/* Contact Form & Details */}
            <section className="contact-section-wrapper">
                <div className="contact-container">
                    
                    {/* Left Side: Info */}
                    <div className="contact-details">
                        <div className="detail-box">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h4>Email Us</h4>
                                <p>motech508@gmail.com</p>
                            </div>
                        </div>
                        <div className="detail-box">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h4>Call Us</h4>
                                <p>0310 7454676</p>
                            </div>
                        </div>
                        <div className="detail-box">
                            <i className="fab fa-whatsapp"></i>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>0310 7454676</p>
                            </div>
                        </div>
                        <div className="detail-box">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Office</h4>
                                <p>Gulshan-e-Iqbal, Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <form className="contact-form" action="https://formsubmit.co/motech508@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New Inquiry from Contact Page" />
                        
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Full Name *" required />
                            <input type="email" name="email" placeholder="Email Address *" required />
                        </div>
                        <div className="input-group">
                            <input type="tel" name="phone" placeholder="Phone Number *" required />
                            <select name="service" required>
                                <option value="">Select Service</option>
                                <option>Web Development</option>
                                <option>WordPress / E-Commerce</option>
                                <option>SEO & Marketing</option>
                                <option>Graphic Design</option>
                            </select>
                        </div>
                        <textarea name="message" placeholder="Tell us about your project *" rows="6" required></textarea>
                        <button type="submit" className="btn-solid">Send Message <i className="fas fa-paper-plane"></i></button>
                    </form>

                </div>
            </section>
        </div>
    )
}