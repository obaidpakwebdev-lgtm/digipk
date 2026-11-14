export const metadata = {
  title: 'Refund Policy | DigoPK Web Agency',
  description: 'Read the refund and cancellation policy for DigoPK digital services.',
};

export default function Refund() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Refund Policy</h1>
                <p className="legal-date">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                
                <div className="legal-content">
                    <p>Thank you for choosing DigoPK. We strive to provide the highest quality digital services. Please read our refund policy carefully before making a payment.</p>

                    <h2>1. Web Development Projects</h2>
                    <ul>
                        <li><strong>Before Work Begins:</strong> If you cancel the project within 24 hours of payment and before any design or development work has started, you are eligible for a full refund minus a 5% processing fee.</li>
                        <li><strong>After Work Begins:</strong> Once the design phase or coding has begun, the 50% advance payment becomes non-refundable, as resources and time have already been allocated.</li>
                        <li><strong>After Delivery:</strong> No refunds will be issued once the final website has been delivered and approved by the client.</li>
                    </ul>

                    <h2>2. Monthly Services (SEO, Marketing, Retainers)</h2>
                    <ul>
                        <li>Payments for monthly services are non-refundable once the month has started and work has commenced.</li>
                        <li>If you wish to cancel, you must do so at least 7 days before the next billing cycle.</li>
                    </ul>

                    <h2>3. Graphic Design & Video Editing</h2>
                    <p>Due to the custom nature of design and video editing, refunds are only available before the first draft is delivered. Once a draft is sent, the payment is non-refundable.</p>

                    <h2>4. How to Request a Refund</h2>
                    <p>To request a refund, please email us at <strong>motech508@gmail.com</strong> with your project details and reason for cancellation. Please allow 7-10 business days for the refund to be processed if approved.</p>

                    <h2>5. Disputes</h2>
                    <p>We encourage you to contact us directly if you have any issues with our service. We are committed to resolving all disputes amicably.</p>
                </div>
            </div>
        </div>
    )
}