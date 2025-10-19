// Working email service using Web3Forms
// This will actually send emails to contact@darkwaresystems.com

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Create formatted email content
    const emailContent = `
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT DETAILS:
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}

🎯 SERVICE INTEREST:
${data.service}

📝 MESSAGE DETAILS:
Subject: ${data.subject}

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: Darkware Systems Contact Form
💬 Reply to: ${data.email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Send email using Web3Forms
    const formData = new FormData();

    // Web3Forms configuration - using your actual access key
    formData.append('access_key', '060b90e7-89f0-4d4a-a9fc-7de84bf39f89');
    formData.append('subject', `New Contact Form: ${data.subject}`);
    formData.append('from_name', data.name);
    formData.append('from_email', data.email);
    formData.append('reply_to', data.email);
    formData.append('to', 'contact@darkwaresystems.com');

    // Add the formatted content as the message
    formData.append('message', emailContent);

    // Also add individual fields for better formatting
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('company', data.company || 'Not provided');
    formData.append('phone', data.phone || 'Not provided');
    formData.append('service', data.service);
    formData.append('original_subject', data.subject);
    formData.append('original_message', data.message);

    console.log('📧 Sending email to contact@darkwaresystems.com...');
    console.log('📧 Email content:', emailContent);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Email sent successfully to contact@darkwaresystems.com');
      console.log('📧 Message ID:', result.messageId);
      console.log('📧 Full response:', result);
      console.log(
        '⚠️  IMPORTANT: Check your Gmail spam folder, promotions tab, or search for "Darkware Systems"'
      );
      return true;
    } else {
      console.error('❌ Email sending failed:', result.message);
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('❌ Email service error:', error);

    // Fallback: Show the email content for manual sending
    const emailContent = `
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT DETAILS:
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}

🎯 SERVICE INTEREST:
${data.service}

📝 MESSAGE DETAILS:
Subject: ${data.subject}

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Submitted: ${new Date().toLocaleString()}
🌐 Source: Darkware Systems Contact Form
💬 Reply to: ${data.email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    console.log('📧 FALLBACK: EMAIL TO: contact@darkwaresystems.com');
    console.log('📧 FALLBACK: EMAIL CONTENT:');
    console.log(emailContent);
    console.log(
      '⚠️  Please copy this content and send it manually to contact@darkwaresystems.com'
    );

    return false;
  }
};
