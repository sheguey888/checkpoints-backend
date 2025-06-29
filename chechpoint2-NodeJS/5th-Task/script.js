import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sheguey.works@gmail.com",
    pass: process.env.APP_PASSWORD, 
  },
});

const mailOptions = {
  from: "sheguey.works@gmail.com",
  to: "vendell.cg@gmail.com",
  subject: "Test d'e-mail avec nodemailer",
  text: "Ceci est un test d'e-mail envoyé depuis Node.js avec nodemailer.", 
};

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
  }
};

sendEmail();
