// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create a new email template
// 5. Get your Public Key from Account settings

export const EMAILJS_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_darkware_systems',
  TEMPLATE_ID: 'template_contact_form',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE', // Get this from your EmailJS account

  // Target email address
  TARGET_EMAIL: 'contact@darkwaresystems.com',
} as const;

// Email template variables that should be available in your EmailJS template:
// {{to_email}} - Target email address
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{company}} - Sender's company
// {{phone}} - Sender's phone number
// {{service}} - Selected service
// {{subject}} - Email subject
// {{message}} - Email message
// {{reply_to}} - Reply-to email address
