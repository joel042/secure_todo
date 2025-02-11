const nodemailer = require('nodemailer');

exports.sendVerificationEmail = async (email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        text: 'Click the verification link to activate your account.'
    };

    await transporter.sendMail(mailOptions);
};
