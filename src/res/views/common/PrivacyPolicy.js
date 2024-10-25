import React from 'react';
import NavBar from '../../components/NavBar';

const PrivacyPolicy = () => {
    return (
        <div><NavBar />
            <div style={styles.container}>
                <h1 style={styles.header}>OneFactor - Privacy Policy</h1>
                <p><strong>Effective Date:</strong> [Insert Effective Date]</p>

                <p>OneFactor values your privacy and is committed to complying with Indian privacy laws, including the Information Technology Act, 2000, and its associated rules.</p>

                <h2 style={styles.subHeader}>1. Information Collection</h2>
                <p>We collect data to offer our services and improve user experience. This includes:</p>
                <ul>
                    <li><strong>Personal Information:</strong> such as name, email, contact details, work experience, and educational background.</li>
                    <li><strong>Usage Information:</strong> such as device details, IP address, and browsing activity on the Website.</li>
                </ul>

                <h2 style={styles.subHeader}>2. Use of Information</h2>
                <p>We may use your data for:</p>
                <ul>
                    <li>Providing job-matching services.</li>
                    <li>Improving the platform and personalizing user experience.</li>
                    <li>Communicating updates, job opportunities, and relevant information.</li>
                </ul>

                <h2 style={styles.subHeader}>3. Sharing of Information</h2>
                <p>OneFactor may share your information only:</p>
                <ul>
                    <li>With potential employers when you apply for job positions.</li>
                    <li>With trusted third-party service providers who assist in running the platform.</li>
                    <li>As required by Indian law or for protecting our rights.</li>
                </ul>

                <h2 style={styles.subHeader}>4. Cookies and Tracking Technologies</h2>
                <p>We use cookies to gather insights on Website usage. Users can manage cookies through browser settings, though disabling cookies may affect functionality.</p>

                <h2 style={styles.subHeader}>5. Data Security</h2>
                <p>We take reasonable measures to protect your data, including encryption and regular security audits. However, internet-based data transfers cannot be completely secure, and users are advised to share information at their own risk.</p>

                <h2 style={styles.subHeader}>6. User Rights</h2>
                <p>Under Indian data protection laws, users have the right to:</p>
                <ul>
                    <li>Access and update their personal data.</li>
                    <li>Request deletion of their data (subject to legal limitations).</li>
                    <li>Withdraw consent for certain data uses.</li>
                </ul>

                <h2 style={styles.subHeader}>7. Data Retention</h2>
                <p>OneFactor retains personal data only as long as necessary to fulfill service purposes or as required by law.</p>

                <h2 style={styles.subHeader}>8. Children’s Privacy</h2>
                <p>OneFactor does not knowingly collect data from individuals under 18. If you are under 18, please refrain from using the Website without parental consent.</p>

                <h2 style={styles.subHeader}>9. Third-Party Links</h2>
                <p>The Website may contain links to external websites, which are not governed by this Privacy Policy. Users are encouraged to review the privacy practices of third-party websites.</p>

                <h2 style={styles.subHeader}>10. Changes to the Privacy Policy</h2>
                <p>Any changes to this Privacy Policy will be posted on this page. Continued use of the Website indicates acceptance of the modified terms.</p>

                <h2 style={styles.subHeader}>11. Contact Us</h2>
                <p>For questions regarding this Privacy Policy or your data, please contact us at [Insert Contact Information].</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '90%',
        maxWidth: '1000px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
    },
    header: {
        color: '#0056b3',
        textAlign: 'center',
    },
    subHeader: {
        color: '#0056b3',
        marginTop: '20px',
    }
};

export default PrivacyPolicy;
