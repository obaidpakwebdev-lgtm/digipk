import Link from 'next/link'

export const metadata = {
  title: 'Thank You | DigoPK',
  description: 'Thank you for contacting DigoPK. We have received your message.',
  robots: 'noindex, nofollow', // Search engine mein yeh page nahi aana chahiye
};

export default function ThankYou() {
    return (
        <div className="thank-you-page">
            <div className="thank-you-card">
                
                {/* Animated Checkmark Circle */}
                <div className="success-checkmark">
                    <i className="fas fa-check"></i>
                </div>

                <h1>Message Sent <span className="text-gradient">Successfully!</span></h1>
                
                <p>
                    Thank you for reaching out to DigoPK. We have received your project details. 
                    Our team is reviewing it and will get back to you within the next <strong>24 hours</strong>.
                </p>

                <div className="thank-you-actions">
                    <Link href="/" className="btn-solid">
                        <i className="fas fa-home"></i> Back to Home
                    </Link>
                    <a href="https://wa.me/923107454676" target="_blank" rel="noreferrer" className="btn-whatsapp">
                        <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                </div>

                <div className="contact-info-text">
                    Need urgent help? Call us at <strong>0310 7454676</strong>
                </div>

            </div>
        </div>
    )
}