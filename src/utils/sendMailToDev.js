import { sendMail } from "./sendMail";

export function sendMailToDev(email, clientName, developer, clientEmail, msg){
    try {
        const message = `
        <br><b>Dear ${developer},</b>
        <br>${msg}
        <br>
        <br>Regards,
        <br>${clientName}
        <br>Email: ${clientEmail}`;

        sendMail(email, `Salam! ${clientName} contacted you 🎉`, message);
        return null;
    } catch (error) {
        console.error(error)
    }
}

