import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, email, phone, company, product, message } = req.body;

  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    return res.status(500).json({ success: false, message: "SMTP credentials not set." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMTP_EMAIL,
    to: "supremeetfils@gmail.com",
    subject: `New Inquiry from ${fullName}`,
    text: `New Contact Inquiry:\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nProduct Interest: ${product || "N/A"}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Your inquiry has been submitted successfully. We will contact you soon!" });
  } catch (error) {
    console.error("Error sending contact inquiry email:", error);
    return res.status(500).json({ success: false, message: "Failed to send contact email." });
  }
} 