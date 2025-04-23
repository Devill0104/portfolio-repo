
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(cors({
  origin: "https://portfolio-frontend-m5ve.onrender.com",
  credentials: true
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Received form submission:', req.body);  // Log the request body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const emailContent = `
    <h3>Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "adityamaurya532@gmail.com",
      subject: `New Message from: ${name}`,
      html: emailContent,
    });
    console.log("Message sent successfully!");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
  }
});

app.get("/test", (req, res)=>{
  console.log("server is running");
  res.send("successfull testing");
})
app.listen(8000, () => console.log("✅ Server running on http://localhost:8000"));
