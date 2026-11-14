export const metadata = {
  title: 'Terms & Conditions | DigoPK Web Agency',
  description: 'Read the terms and conditions for using DigoPK web development and digital marketing services.',
};

export default function Terms() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Terms & Conditions</h1>
                <p className="legal-date">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                
                <div className="legal-content">
                    <p>Welcome to DigoPK. These terms and conditions outline the rules and regulations for the use of DigoPK's Website and Services.</p>
                    <p>By accessing this website and hiring us, we assume you accept these terms and conditions. Do not continue to use DigoPK if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h2>1. Services</h2>
                    <p>DigoPK provides web development, digital marketing, SEO, graphic design, and video editing services. We agree to deliver the services as described in the specific project proposal or package selected by the client.</p>

                    <h2>2. Payments & Advance</h2>
                    <ul>
                        <li>For web development projects, a <strong>50% advance payment</strong> is required to initiate the work.</li>
                        <li>The remaining 50% must be paid upon project completion and before the final website is transferred to the client's live server.</li>
                        <li>For monthly services (SEO, Marketing), payment is due at the start of each month.</li>
                    </ul>

                    <h2>3. Client Responsibilities</h2>
                    <p>The client agrees to provide all necessary materials, images, text, and access required to complete the project. Delays in providing these materials may result in project delays.</p>

                    <h2>4. Intellectual Property</h2>
                    <p>Upon full payment, the client owns the final website design and code. DigoPK retains the right to use the completed project in its portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed.</p>

                    <h2>5. Limitation of Liability</h2>
                    <p>DigoPK will not be held liable for any indirect, special, or consequential damages arising out of the use or inability to use our services or website.</p>

                    <h2>6. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Your continued use of our services after any changes indicates your acceptance of the new terms.</p>

                    <h2>7. Contact Information</h2>
                    <p>If you have any questions about these Terms, please contact us at <strong>motech508@gmail.com</strong>.</p>
                </div>
            </div>
        </div>
    )
}