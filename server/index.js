import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const RECIPIENT_EMAIL = 'm.kalaiyarasangi1619@gmail.com';

app.use(express.json());

app.post('/api/send-inquiry', async (req, res) => {
  const { name, email, service, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const gmailUser = process.env.GMAIL_USER || RECIPIENT_EMAIL;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    return res.status(500).json({
      error: 'GMAIL_APP_PASSWORD is not configured in .env on the server.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"KalaiArts Website" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email.trim(),
      subject: `New KalaiArts Project Inquiry: ${service || 'General'}`,
      text: [
        `New Project Inquiry from KalaiArts Website`,
        `----------------------------------------`,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Service: ${service || 'Not specified'}`,
        ``,
        `Project Details:`,
        `${message.trim()}`,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0284c7; margin-top: 0;">New KalaiArts Project Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
          <p><strong>Service:</strong> ${escapeHtml(service || 'Not specified')}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Project Details:</strong></p>
          <p style="white-space: pre-wrap; color: #334155;">${escapeHtml(message.trim())}</p>
        </div>
      `,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send email via Gmail SMTP.' });
  }
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.listen(PORT, () => {
  console.log(`KalaiArts mail server listening on http://localhost:${PORT}`);
});

