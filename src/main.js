import './style.css'

// Content data structure
const content = {
  'privacy-policy': {
    title: 'Privacy Policy',
    lastUpdated: 'August 9, 2025',
    html: `
      <div class="highlight">
        <strong>Important:</strong> This Privacy Policy explains how the Facebook Pages API application collects, uses, and protects your information when you use our service.
      </div>

      <h2>1. Information We Collect</h2>
      
      <h3>1.1 Facebook Data</h3>
      <p>Our application accesses the following Facebook data through the Facebook Graph API:</p>
      <ul>
        <li><strong>Page Information:</strong> Basic page details (name, category, about section, contact information)</li>
        <li><strong>Page Posts:</strong> Posts published on your Facebook pages</li>
        <li><strong>Comments:</strong> Comments on your page posts</li>
        <li><strong>Comment Replies:</strong> Replies to comments on your posts</li>
        <li><strong>Public Profile Information:</strong> Basic information from commenters (name, profile picture)</li>
      </ul>

      <h3>1.2 Technical Data</h3>
      <p>We may collect:</p>
      <ul>
        <li>API request logs for debugging and monitoring</li>
        <li>Error logs to improve service reliability</li>
        <li>Basic usage statistics (number of API calls, response times)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      
      <p>We use the collected information to:</p>
      <ul>
        <li><strong>Provide API Services:</strong> Retrieve and display your Facebook page data through our API endpoints</li>
        <li><strong>Service Improvement:</strong> Monitor API performance and reliability</li>
        <li><strong>Technical Support:</strong> Debug issues and provide customer support</li>
        <li><strong>Security:</strong> Detect and prevent unauthorized access</li>
      </ul>

      <h2>3. Data Storage and Security</h2>
      
      <h3>3.1 Data Storage</h3>
      <ul>
        <li>We do <strong>not permanently store</strong> your Facebook data</li>
        <li>Data is retrieved from Facebook in real-time and passed through our API</li>
        <li>Access tokens are not stored on our servers</li>
        <li>Log data may be temporarily stored for up to 30 days for monitoring purposes</li>
      </ul>

      <h3>3.2 Security Measures</h3>
      <ul>
        <li>All data transmission uses HTTPS encryption</li>
        <li>Access tokens are handled securely and never logged</li>
        <li>Server infrastructure follows industry security best practices</li>
        <li>Regular security audits and updates</li>
      </ul>

      <h2>4. Data Sharing</h2>
      
      <p>We do <strong>not sell, trade, or share</strong> your Facebook data with third parties, except:</p>
      <ul>
        <li><strong>Service Providers:</strong> Trusted hosting providers who assist in operating our service</li>
        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
        <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
      </ul>

      <h2>5. Your Rights and Choices</h2>
      
      <h3>5.1 Access and Control</h3>
      <ul>
        <li><strong>Revoke Access:</strong> You can revoke our app's access through your Facebook settings</li>
        <li><strong>Data Deletion:</strong> Contact us to request deletion of any stored data</li>
        <li><strong>Access Requests:</strong> Request information about data we have processed</li>
      </ul>

      <h3>5.2 Facebook Permissions</h3>
      <p>Our app only requests the minimum necessary permissions:</p>
      <ul>
        <li><code>pages_show_list</code> - To retrieve your managed pages</li>
        <li><code>pages_read_engagement</code> - To read posts, comments, and engagement data</li>
        <li><code>public_profile</code> - Basic profile information</li>
      </ul>

      <h2>6. Third-Party Services</h2>
      
      <p>Our service integrates with:</p>
      <ul>
        <li><strong>Facebook Graph API:</strong> Subject to <a href="https://www.facebook.com/privacy/policy" target="_blank">Facebook's Privacy Policy</a></li>
        <li><strong>Hosting Providers:</strong> Cloud infrastructure providers with appropriate data protection agreements</li>
      </ul>

      <h2>7. Data Retention</h2>
      
      <ul>
        <li><strong>Facebook Data:</strong> Not retained - retrieved in real-time</li>
        <li><strong>Log Data:</strong> Automatically deleted after 30 days</li>
        <li><strong>Error Logs:</strong> Kept for up to 90 days for debugging purposes</li>
      </ul>

      <h2>8. International Data Transfers</h2>
      
      <p>Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your privacy rights.</p>

      <h2>9. Children's Privacy</h2>
      
      <p>Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.</p>

      <h2>10. Changes to This Policy</h2>
      
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
      <ul>
        <li>Posting the new Privacy Policy on this page</li>
        <li>Updating the "Last updated" date</li>
        <li>Providing notice through our API or email if you have provided contact information</li>
      </ul>

      <h2>11. Contact Information</h2>
      
      <div class="contact-info">
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> kathawut.p@gmail.com</li>
          <li><strong>Address:</strong> 111/95 Venue I-D Phaholyothin-Rangsit Bangkok 12150</li>
        </ul>
        <p><strong>Data Protection Officer:</strong> [DPO Contact Information if required]</p>
      </div>

      <h2>12. Legal Compliance</h2>
      
      <p>This Privacy Policy complies with:</p>
      <ul>
        <li>Facebook Platform Policy</li>
        <li>General Data Protection Regulation (GDPR)</li>
        <li>California Consumer Privacy Act (CCPA)</li>
        <li>Other applicable data protection laws</li>
      </ul>

      <div class="highlight">
        <strong>Facebook App Review:</strong> This Privacy Policy is designed to meet Facebook's app review requirements. Ensure you update the contact information and company details before submitting for review.
      </div>
    `
  },
  'terms-of-service': {
    title: 'Terms of Service',
    lastUpdated: 'August 9, 2025',
    html: `
      <div class="highlight">
        <strong>Agreement:</strong> By using the Facebook Pages API service, you agree to be bound by these Terms of Service.
      </div>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Facebook Pages API service ("Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h2>2. Description of Service</h2>
      <p>The Facebook Pages API service provides:</p>
      <ul>
        <li>RESTful API endpoints to access Facebook Pages data</li>
        <li>Retrieval of page information, posts, comments, and engagement data</li>
        <li>Real-time data access through Facebook Graph API</li>
        <li>Authentication and authorization management</li>
      </ul>

      <h2>3. User Responsibilities</h2>
      
      <h3>3.1 Account Security</h3>
      <ul>
        <li>Keep your Facebook access tokens secure and confidential</li>
        <li>Do not share access credentials with unauthorized parties</li>
        <li>Notify us immediately of any unauthorized use of your account</li>
      </ul>

      <h3>3.2 Compliance</h3>
      <ul>
        <li>Comply with Facebook Platform Policies and Terms</li>
        <li>Use the service only for legitimate business purposes</li>
        <li>Respect rate limits and usage guidelines</li>
        <li>Do not attempt to circumvent security measures</li>
      </ul>

      <h2>4. Prohibited Uses</h2>
      <p>You may not use our service to:</p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on intellectual property rights</li>
        <li>Transmit harmful or malicious code</li>
        <li>Attempt unauthorized access to our systems</li>
        <li>Scrape or harvest data beyond intended use</li>
        <li>Resell or redistribute our service without permission</li>
      </ul>

      <h2>5. API Usage Limits</h2>
      <ul>
        <li>Standard rate limits apply as defined by Facebook Graph API</li>
        <li>Excessive usage may result in temporary suspension</li>
        <li>Commercial usage may require separate agreement</li>
        <li>We reserve the right to modify limits with notice</li>
      </ul>

      <h2>6. Data and Privacy</h2>
      <ul>
        <li>Your use of the service is subject to our Privacy Policy</li>
        <li>You are responsible for compliance with data protection laws</li>
        <li>We do not permanently store your Facebook data</li>
        <li>You retain ownership of your data</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <ul>
        <li>The service and its technology are owned by us</li>
        <li>You retain rights to your Facebook content</li>
        <li>You grant us license to process your data as necessary for the service</li>
        <li>Respect third-party intellectual property rights</li>
      </ul>

      <h2>8. Service Availability</h2>
      <ul>
        <li>We strive for high availability but do not guarantee 100% uptime</li>
        <li>Maintenance windows will be announced when possible</li>
        <li>Service interruptions may occur due to Facebook API changes</li>
        <li>No liability for indirect or consequential damages from downtime</li>
      </ul>

      <h2>9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>Our liability is limited to the amount paid for the service</li>
        <li>We are not liable for indirect, incidental, or consequential damages</li>
        <li>Users are responsible for their own data backup and security</li>
        <li>Service is provided "as is" without warranties</li>
      </ul>

      <h2>10. Termination</h2>
      
      <h3>10.1 Termination by User</h3>
      <ul>
        <li>You may terminate your use of the service at any time</li>
        <li>Revoke access through your Facebook settings</li>
        <li>Contact us for data deletion requests</li>
      </ul>

      <h3>10.2 Termination by Us</h3>
      <p>We may terminate or suspend access if you:</p>
      <ul>
        <li>Violate these terms</li>
        <li>Engage in prohibited activities</li>
        <li>Pose a security risk</li>
        <li>Have inactive service for extended periods</li>
      </ul>

      <h2>11. Changes to Terms</h2>
      <ul>
        <li>We reserve the right to modify these terms</li>
        <li>Changes will be posted with updated date</li>
        <li>Continued use constitutes acceptance of changes</li>
        <li>Significant changes will be communicated via email if possible</li>
      </ul>

      <h2>12. Facebook Platform Compliance</h2>
      <p>This service operates under and complies with:</p>
      <ul>
        <li><a href="https://developers.facebook.com/policy" target="_blank">Facebook Platform Policy</a></li>
        <li><a href="https://developers.facebook.com/terms" target="_blank">Facebook Platform Terms</a></li>
        <li><a href="https://www.facebook.com/terms.php" target="_blank">Facebook Terms of Service</a></li>
      </ul>

      <h2>13. Governing Law</h2>
      <p>These terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles.</p>

      <h2>14. Contact Information</h2>
      
      <div class="contact-info">
        <p>For questions about these Terms of Service, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> kathawut.p@gmail.com</li>
          <li><strong>Address:</strong> 111/95 Venue I-D Phaholyothin-Rangsit Bangkok 12150</li>
          
        </ul>
      </div>

      <div class="highlight">
        <strong>Note:</strong> Update contact information and jurisdiction details before deploying to production.
      </div>
    `
  }
}

// Current page state
let currentPage = 'privacy-policy'

// Navigation function
function showPage(pageKey) {
  currentPage = pageKey
  const pageData = content[pageKey]
  
  const app = document.querySelector('#app')
  app.innerHTML = `
    <div class="container">
      <div class="navigation">
        <button class="nav-btn ${currentPage === 'privacy-policy' ? 'active' : ''}" onclick="showPage('privacy-policy')">
          Privacy Policy
        </button>
        <button class="nav-btn ${currentPage === 'terms-of-service' ? 'active' : ''}" onclick="showPage('terms-of-service')">
          Terms of Service
        </button>
      </div>

      <header>
        <h1>${pageData.title}</h1>
        <p class="last-updated">Last updated: ${pageData.lastUpdated}</p>
      </header>
      
      <main>
        ${pageData.html}
      </main>
      
      <footer>
        <p>&copy; ${new Date().getFullYear()} feed-page-comment-app. All rights reserved.</p>
      </footer>
    </div>
  `
}

// Make showPage globally available
window.showPage = showPage

// Initialize the application
showPage('privacy-policy')
