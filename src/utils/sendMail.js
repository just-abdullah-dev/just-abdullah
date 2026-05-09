import nodemailer from 'nodemailer';

export async function sendMail(email, subject, message) {
    if (!process.env.EMAIL || !process.env.APP_PASS) {
        throw new Error('Failed to submit form. Kindly mail on "just.abdullah.dev@gmail.com".');
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASS,
            },
        });

        await transporter.sendMail({
            from: {
                name: 'Just Abdullah',
                address: process.env.EMAIL
            }, 
            to: email, 
            subject: subject, 
            html: `<p>${message}</p>`, 
        });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to submit form. Kindly mail on "just.abdullah.dev@gmail.com".');
    }
}
