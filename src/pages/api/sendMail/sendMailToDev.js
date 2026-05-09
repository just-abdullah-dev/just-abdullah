import { sendMailToDev } from "@/utils/sendMailToDev";

const fallbackMessage = 'Failed to submit form. Kindly mail on "just.abdullah.dev@gmail.com".';

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Only POST method is allowed.",
      });
    }

    const { name, email, message, subject } = req.body ?? {};
    const emailPattern = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: `All fields are required. ${fallbackMessage}`,
      });
    }

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: `Please enter a valid email address. ${fallbackMessage}`,
      });
    }

    await sendMailToDev(
      "just.abdullah.dev@gmail.com",
      name.trim(),
      "Abdullah",
      email.trim(),
      message.trim(),
      subject.trim()
    );

    return res.status(200).json({
      success: true,
      message: "Thanks for contacting! I will get back to you soon!",
    });
  } catch (error) {
    return res.status(error?.statusCode || 500).json({
      success: false,
      message: error?.message || fallbackMessage,
    });
  }
}
