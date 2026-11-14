export const metadata = {
  title: 'Privacy Policy | DigoPK Web Agency',
  description: 'Learn how DigoPK collects, uses, and protects your personal data.',
};

export default function Privacy() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Privacy Policy</h1>
                <p className="legal-date">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                
                <div className="legal-content">
                    <p>At DigoPK, accessible from digopk.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DigoPK and how we use it.</p>

                    <h2>1. Information We Collect</h2>
                    <p>When you fill out a contact or apply form on our website, we may collect the following information:</p>
                    <ul>
                        <li>Your Name</li>
                        <li>Email Address</li>
                        <li>Phone / WhatsApp Number</li>
                        <li>Company Name (Optional)</li>
                        <li>Project Details and Budget</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Respond to your inquiries and provide quotes</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Communicate with you for customer service and updates</li>
                    </ul>

                    <h2>3. Log Files</h2>
                    <p>DigoPK follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>

                    <h2>4. Third-Party Services</h2>
                    <p>We use <strong>FormSubmit.co</strong> to process contact form submissions and send them to our email. We also use Google Analytics to track website traffic. These third-party services have their own privacy policies.</p>

                    <h2>5. Data Protection</h2>
                    <p>We do not sell, trade, or rent users' personal identification information to others. We implement appropriate security measures to protect your data.</p>

                    <h2>6. Contact Us</h2>
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>motech508@gmail.com</strong>.</p>
                </div>
            </div>
        </div>
    )
}