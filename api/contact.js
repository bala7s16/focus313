import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Received body:', req.body);

  const { name, email, phone, message, branch, branchEmail, type } = req.body || {};

  const missing = [];
  if (!name) missing.push('name');
  if (!email) missing.push('email');
  if (!message) missing.push('message');

  if (missing.length > 0) {
    console.log('DEBUG: Validation failed on fields:', missing.join(', '));
    return res.status(400).json({ error: `DEBUG_ERROR: These fields are missing: ${missing.join(', ')}` });
  }

  // Determine target email
  // If branchEmail is provided from frontend (which we just updated to be correct for each branch), use it.
  // Otherwise, default to the general enquiry address.
  const targetEmail = branchEmail || 'enquiry@focus313fitness.com';

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in', // Using .in for India-based accounts
    port: 587,
    secure: false, // true for 465, false for 587 (STARTTLS)
    auth: {
      user: (process.env.ZOHO_EMAIL || '').trim(), 
      pass: (process.env.ZOHO_PASSWORD || '').trim(),
    },
  });

  try {
    const mailOptions = {
      from: (process.env.ZOHO_EMAIL || '').trim(), // Must be your Zoho account email or authorized alias
      replyTo: email, // The user's email for replies
      to: targetEmail,
      subject: `New Enquiry from ${name} (${type || 'Contact Form'})`,
      text: `
        New Enquiry Details:
        --------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Branch: ${branch || 'General'}
        Type: ${type || 'General Contact'}

        Message:
        ${message}
      `,
      html: `
        <h3>New Enquiry Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Branch:</strong> ${branch || 'General'}</p>
        <p><strong>Type:</strong> ${type || 'General Contact'}</p>
        <br>
        <h4>Message:</h4>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('CRITICAL: Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again later.', 
      details: error.message,
      code: error.code
    });
  }
}
