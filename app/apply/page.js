import '../globals.css'
import '../apply.css'

export default function Apply() {
    return (
        <>
            <section className="apply-hero">
                <div className="pill-badge">
                    <span className="dot" /> Let's Build Something Great
                </div>
                <h1>
                    Start Your Project <span className="text-gradient">Today</span>
                </h1>
                <p>
                    Fill out this quick form to tell us about your project. Our team will
                    review your requirements and contact you with a custom quote within 24
                    hours.
                </p>
            </section>
            {/* Form Container */}
            <div className="apply-container">
                <div className="apply-form-box">
                    {/* FORM SUBMIT API CONFIGURATION */}
                    <form
                        action="https://formsubmit.co/motech508@gmail.com"
                        method="POST"
                        id="applyForm"
                    >
                        {/* FormSubmit configuration */}
                        <input type="hidden" name="_captcha" defaultValue="false" />
                        <input
                            type="hidden"
                            name="_subject"
                            defaultValue="New Project Application from DigoPK - Apply Page"
                        />
                        <input type="hidden" name="_template" defaultValue="table" />
                        {/* Redirect to thank you page after submission */}
                        <input
                            type="hidden"
                            name="_next"
                            defaultValue="https://digopk.com/thank-you.html"
                        />
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        {/* Section 1: Personal Info */}
                        <div className="form-section-title">
                            <i className="fas fa-user-circle" /> 1. Personal Information
                        </div>
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
                                placeholder="Phone / WhatsApp Number *"
                                required=""
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company Name (Optional)"
                            />
                        </div>
                        {/* Section 2: Project Details */}
                        <div className="form-section-title" style={{ marginTop: 15 }}>
                            <i className="fas fa-laptop-code" /> 2. Project Details
                        </div>
                        <select name="service" required="">
                            <option value="">Select a service...</option>
                            <option>Web Development (Custom)</option>
                            <option>WordPress / E-Commerce</option>
                            <option>UI/UX Design</option>
                            <option>SEO &amp; Digital Marketing</option>
                            <option>Graphic Design / Branding</option>
                            <option>Video Editing</option>
                            <option>Other</option>
                        </select>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Describe your project goals, required features, and any reference websites you like... *"
                            required=""
                            defaultValue={""}
                        />
                        {/* Section 3: Budget */}
                        <div className="form-section-title" style={{ marginTop: 15 }}>
                            <i className="fas fa-wallet" /> 3. Estimated Budget
                        </div>
                        <div className="budget-options">
                            <label className="budget-label">
                                <input
                                    type="radio"
                                    name="budget"
                                    defaultValue="Under PKR 50k"
                                    defaultChecked=""
                                />
                                <div className="budget-card">
                                    <h4>Under PKR 50k</h4>
                                    <p>Starter Website / Basic Design</p>
                                </div>
                            </label>
                            <label className="budget-label">
                                <input type="radio" name="budget" defaultValue="PKR 50k - 150k" />
                                <div className="budget-card">
                                    <h4>PKR 50k - 150k</h4>
                                    <p>Business Website / E-Commerce</p>
                                </div>
                            </label>
                            <label className="budget-label">
                                <input type="radio" name="budget" defaultValue="PKR 150k+" />
                                <div className="budget-card">
                                    <h4>PKR 150k+</h4>
                                    <p>Custom Web App / SaaS</p>
                                </div>
                            </label>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn-solid"
                            style={{ marginTop: 15, padding: 18, fontSize: 18 }}
                        >
                            Submit Application{" "}
                            <i className="fas fa-paper-plane" style={{ marginLeft: 8 }} />
                        </button>
                        {/* Trust Badges */}
                        <div className="trust-badges">
                            <span>
                                <i className="fas fa-lock" /> 100% Secure
                            </span>
                            <span>
                                <i className="fas fa-clock" /> 24H Response
                            </span>
                            <span>
                                <i className="fas fa-handshake" /> No Obligation
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}