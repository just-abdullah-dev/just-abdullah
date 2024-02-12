import nodemailer from 'nodemailer';

export async function sendMail(email, subject, message) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASS,
            },
        });
    
    
        const info = await transporter.sendMail({
            from: {
                name: 'Just Abdullah',
                address: process.env.EMAIL
            }, 
            to: email, 
            subject: subject, 
            html: `<p>${message}</p>`, 
        });
    } catch (error) {
        console.error(error)
    }
}