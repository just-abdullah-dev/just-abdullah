import { sendMailToDev } from "@/utils/sendMailToDev";

export default async function handler (req, res) {
    try {
        if(req.method !== "POST"){
            return res.status(400).json({
                success: false,
                message: "Only POST method is allow."
            })
        }
        const {name, email, message} = req.body;
        sendMailToDev(
            "just.abdullah.dev@gmail.com",
            name,
            "Abdullah",
            email,
            message
          );
          res.status(200).json({
            success: true,
            message: 'Thanks for contacting! I will get back to you soon!'
          })
    } catch (error) {
        res.status(error?.statusCode || 500).json({
            success: false,
            message: error?.message || "ERR",
        })
    }
}