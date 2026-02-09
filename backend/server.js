const express = require('express');
const cors = require('cors');
const pool = require("./db");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= EMAIL CONFIG =================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ================= ROOT =================
app.get('/', (req, res) => {
  res.json({
    message: 'A1cleaning API',
    version: '1.0.0',
    endpoints: {
      services: 'GET /api/services',
      contact: 'POST /api/contact',
      quote: 'POST /api/quote',
      health: 'GET /health'
    }
  });
});

// ================= SERVICES =================
app.get('/api/services', (req, res) => {
  const services = [
    { id: 1, name: 'Office Cleaning', description: 'Professional office cleaning', icon: 'office' },
    { id: 2, name: 'Commercial Cleaning', description: 'Commercial cleaning services', icon: 'commercial' },
    { id: 3, name: 'Deep Cleaning', description: 'Deep cleaning services', icon: 'deep' },
    { id: 4, name: 'Move-in / Move-out Cleaning', description: 'Move in / out cleaning', icon: 'moving' }
  ];

  res.json({ success: true, services });
});

// ================= CONTACT FORM =================
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await pool.query(
      `INSERT INTO contact_messages (name, email, phone, message)
       VALUES ($1, $2, $3, $4)`,
      [name, email, phone, message]
    );

    await transporter.sendMail({
      from: `"A1 Cleaning Website" <${process.env.EMAIL_USER}>`,
      to: "chowhanvishanthraj@gmail.com",
      subject: "📩 New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error('CONTACT API ERROR:', error);
    res.status(500).json({ success: false });
  }
});

// ================= QUOTE FORM (DB + EMAIL) =================
app.post('/api/quote', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      facilityType,
      squareFootage,
      message
    } = req.body;

    // 1️⃣ Save to Database
    const result = await pool.query(
      `INSERT INTO quote_requests 
       (name, email, phone, facility_type, square_footage, message)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, email, phone, facilityType, squareFootage, message]
    );

    // 2️⃣ Send Email to YOU
    await transporter.sendMail({
      from: `"A1 Cleaning Website" <${process.env.EMAIL_USER}>`,
      to: "chowhanvishanthraj@gmail.com",
      subject: "🧾 New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Facility Type:</strong> ${facilityType}</p>
        <p><strong>Square Footage:</strong> ${squareFootage}</p>
        <p><strong>Details:</strong><br/>${message}</p>
      `
    });

    res.json({
      success: true,
      id: result.rows[0].id
    });

  } catch (error) {
    console.error('QUOTE API ERROR:', error);
    res.status(500).json({ success: false });
  }
});

// ================= ADMIN API =================
// Get all quotes
app.get('/api/admin/quotes', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM quote_requests ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('ADMIN QUOTES ERROR:', error);
    res.status(500).json({ success: false });
  }
});

// Get all contacts
app.get('/api/admin/contacts', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM contact_messages ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('ADMIN CONTACTS ERROR:', error);
    res.status(500).json({ success: false });
  }
});

// Update quote status
app.put('/api/admin/quotes/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      'UPDATE quote_requests SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('UPDATE QUOTE STATUS ERROR:', error);
    res.status(500).json({ success: false });
  }
});

// Update contact status
app.put('/api/admin/contacts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      'UPDATE contact_messages SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('UPDATE CONTACT STATUS ERROR:', error);
    res.status(500).json({ success: false });
  }
});

// ================= HEALTH =================
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
