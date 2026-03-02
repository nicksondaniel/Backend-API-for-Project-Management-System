import mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new mailgen({
    theme: "default",
    product: {
      name: "Project Management App",
      link: "https://project-management-app.com",
    },
  });

  const emailHtml = mailGenerator.generate(options.mailGenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: '"Project Management App" <project.management.app@gmail.com>',
    to: options.email,
    subject: options.subject,
    html: emailHtml,
    text: emailText,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    throw error;
  }
};

const emailVerification = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "Hii, Nickson here...!\nWelcome to our project management app! We're excited to have you on board.",
      action: {
        instructions:
          "To get started with our app, please click the button below to verify your email address:",
        button: {
          color: "#22BC66",
          text: "Verify Email Address",
          link: verificationUrl,
        },
      },
      outro:
        "If you have any questions or need assistance, feel free to reach out to our support team. We're here to help you make the most of our app. Thank you for joining us!",
    },
  };
};

const forgotPasswordMail = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "You have requested a password reset for your account.",
      action: {
        instructions: "To reset your password, please click the button below:",
        button: {
          color: "#ce5116",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "If you have any questions or need assistance, feel free to reach out to our support team. We're here to help you make the most of our app. Thank you for joining us!",
    },
  };
};

export { emailVerification, forgotPasswordMail, sendEmail };
