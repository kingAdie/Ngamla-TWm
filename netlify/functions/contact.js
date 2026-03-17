/**
 * Netlify Function: netlify/functions/contact
 * Gmail SMTP via nodemailer — uses App Password
 * Called as: POST /.netlify/functions/contact
 */

const nodemailer = require('nodemailer');

/* ── Gmail SMTP transporter ── */
function createTransport() {
  return nodemailer.createTransport({
    host:       'smtp.gmail.com',
    port:       587,
    secure:     false,   // STARTTLS on port 587
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    }
  });
}

/* ── HTML email template ── */
function buildHTML(data, type) {
  const now = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' });
  const rows = Object.entries(data)
    .map(([k, v]) => `
      <tr>
        <td style="padding:10px 16px;font-weight:600;color:#555;background:#f9f9f9;border-bottom:1px solid #eee;width:160px;vertical-align:top;">${k}</td>
        <td style="padding:10px 16px;color:#222;border-bottom:1px solid #eee;">${String(v||'—').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</td>
      </tr>`).join('');

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px;">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
  <tr><td style="background:#E8651A;padding:24px 32px;">
    <table width="100%"><tr>
      <td><div style="font-size:20px;font-weight:900;color:#fff;">NGAMLA TWM SECURITY</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.75);margin-top:4px;letter-spacing:1px;text-transform:uppercase;">Security &amp; Surveillance Solutions</div></td>
      <td align="right"><div style="background:rgba(255,255,255,0.18);border-radius:4px;padding:7px 14px;font-size:13px;color:#fff;font-weight:600;">${type}</div></td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:28px 32px;">
    <p style="margin:0 0 18px;color:#333;font-size:15px;line-height:1.6;">A new <strong>${type}</strong> was submitted on the website.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:6px;overflow:hidden;border-collapse:collapse;">${rows}</table>
    <p style="margin:20px 0 0;color:#aaa;font-size:11px;">Received: ${now}</p>
  </td></tr>
  <tr><td style="background:#f9f9f9;padding:18px 32px;border-top:1px solid #eee;">
    <p style="margin:0;color:#aaa;font-size:11px;text-align:center;">PSIRA 4738249 | CIPC 2024/412986/07 | Level 1 B-BBEE<br>Sent from your Netlify website.</p>
  </td></tr>
</table></td></tr></table></body></html>`;
}

/* ── Auto-reply to sender ── */
function buildAutoReply(name, isQuote) {
  return `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;">
  <div style="background:#E8651A;padding:20px 24px;border-radius:6px 6px 0 0;">
    <h2 style="color:#fff;margin:0;font-size:18px;">Thank you, ${name}!</h2>
  </div>
  <div style="border:1px solid #eee;border-top:none;padding:24px;border-radius:0 0 6px 6px;background:#fff;">
    <p style="color:#333;line-height:1.7;margin:0 0 12px;">We've received your ${isQuote ? 'quote request' : 'enquiry'} and will get back to you within <strong>24 hours</strong>.</p>
    <p style="color:#333;line-height:1.7;margin:0 0 20px;">Need urgent help? Call us directly:<br>
      <strong style="color:#E8651A;font-size:16px;">066 319 2062 &nbsp;|&nbsp; 063 857 3727</strong></p>
    <p style="color:#888;font-size:11px;margin:0;border-top:1px solid #eee;padding-top:16px;">PSIRA 4738249 | CIPC 2024/412986/07 | Level 1 B-BBEE</p>
  </div>
</div>`;
}

/* ── CORS headers ── */
const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: CORS, body: '' };
  if (event.httpMethod !== 'POST')   return { statusCode: 405, headers: CORS, body: JSON.stringify({ error: 'Method not allowed' }) };

  let body;
  try { body = JSON.parse(event.body || '{}'); }
  catch { return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'Invalid request' }) }; }

  const { name, email, phone, company, service, message, location, product } = body;

  if (!name || !email || !phone) {
    return { statusCode: 400, headers: CORS, body: JSON.stringify({ success: false, error: 'Name, email and phone are required.' }) };
  }

  const isQuote = !!(product || /quote/i.test(service || ''));
  const type    = isQuote ? 'Quote Request' : 'Contact Form';

  // ── TO email: change this when ready to switch from testing to live ──
  const TO_EMAIL = process.env.TO_EMAIL || 'ratshimolo112@gmail.com';

  const data = {
    'Full Name':    name,
    'Email':        email,
    'Phone':        phone,
    'Company/Site': company  || 'Not provided',
    'Service':      service  || 'General Enquiry',
    'Location':     location || 'Not provided',
    'Product':      product  || 'Not specified',
    'Message':      message  || 'No message',
  };

  try {
    const transport = createTransport();

    // Send notification to you
    await transport.sendMail({
      from:    `"Ngamla Twm Website" <${process.env.SMTP_USERNAME}>`,
      to:      TO_EMAIL,
      replyTo: email,
      subject: `[${type}] ${name} — ${phone}`,
      html:    buildHTML(data, type),
      text:    Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n'),
    });

    // Send auto-reply to the person who submitted
    await transport.sendMail({
      from:    `"Ngamla Twm Security" <${process.env.SMTP_USERNAME}>`,
      to:      email,
      subject: `We received your ${isQuote ? 'quote request' : 'enquiry'} — Ngamla Twm Security`,
      html:    buildAutoReply(name, isQuote),
    });

    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({ success: true, message: 'Your message has been sent. We will contact you within 24 hours.' })
    };

  } catch (err) {
    console.error('SMTP error:', err.message);
    return {
      statusCode: 500,
      headers: CORS,
      body: JSON.stringify({ success: false, error: 'Email delivery failed. Please call 066 319 2062.' })
    };
  }
};
