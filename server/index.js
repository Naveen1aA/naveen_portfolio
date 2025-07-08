const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/submitForm', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    // Set up transporter (Gmail example)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'n0705116@gmail.com',          // your email
        pass: 'dxxy venf ludt qklq',
      },
    });

    // Email content
    let mailOptions = {
      from: email,  // the user's email
      to: 'n0705116@gmail.com',  // where YOU want to receive the message
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});

// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parses application/json

// app.post('/api/submitForm', (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required!' });
//   }

//   // You now have access to the user email:
//   console.log('Email Received:', email);

//   // Example: Save it to DB, send confirmation, etc.
//   return res.status(200).json({ message: 'Form submitted successfully' });
// });

// app.listen(5000, () => {
//   console.log('Server running at http://localhost/5000');
// });
