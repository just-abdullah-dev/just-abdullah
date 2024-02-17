import { sendMail } from "./sendMail";

export function sendMailToDev(email, clientName, developer, clientEmail, msg, subject){
    try {
        const message = `
        <br><b>Dear ${developer},</b>
        <br>${msg}
        <br>
        <br>Regards,
        <br>${clientName}
        <br>Email: ${clientEmail}`;

        sendMail(email, `Salam! ${clientName} contacted you 🎉 | ${subject}`, message);
        return null;
    } catch (error) {
        console.error(error)
    }
}

