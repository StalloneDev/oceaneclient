// Email utility functions for handling contact form submissions
export interface EmailData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  product?: string;
  message: string;
}

export function formatEmailForOceaneCenter(data: EmailData): string {
  return `
New Contact Inquiry from Oceane Center Website

From: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Product Interest: ${data.product || 'Not specified'}

Message:
${data.message}

---
This inquiry was submitted through the Oceane Center website contact form.
  `.trim();
}

export function generateEmailSubject(data: EmailData): string {
  const productText = data.product ? ` - ${data.product}` : '';
  return `New Inquiry from ${data.fullName}${productText} - Oceane Center`;
}
