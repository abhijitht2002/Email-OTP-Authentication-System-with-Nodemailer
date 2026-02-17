const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
})

const sentMail = async (email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Hello ✔",
            text: `your otp code is ${otp}`,
        })

        console.log("Message sent:", info.messageId);

    } catch (error) {
        console.log("Error renting email", error)
        throw new Error("failed to sent OTP email")
    }
}

module.exports = { sentMail }
