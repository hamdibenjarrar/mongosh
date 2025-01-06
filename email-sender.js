const nodemailer = require("nodemailer");

// Configure the transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password", // Use app-specific password if using Gmail
    },
});

// Email options
const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-email@gmail.com",
    subject: "Test Email from Node.js",
    text: "Hello from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error("Error sending email:", err);
    } else {
        console.log("Email sent:", info.response);
    }
});
