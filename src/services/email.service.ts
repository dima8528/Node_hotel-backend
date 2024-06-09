import nodemailer from 'nodemailer';
import 'dotenv/config'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { SendMailOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "diploma.admn.hotel@gmail.com",
    pass: "uanm yqnw ehnh oizu",
  },
} as SMTPTransport.Options);

interface CustomSendMailOptions extends SendMailOptions {
  email: string;
}

interface ActivationSendMailOptions extends CustomSendMailOptions {
  activationToken: string;
}

export function send({ email, subject, html }: CustomSendMailOptions) {
  return transporter.sendMail({
    from: 'Auth API', // sender address
    to: email,
    subject,
    text: '',
    html,
  });
}

function sendActivationEmail({ email, activationToken }: ActivationSendMailOptions) {
  const href = `${process.env.CLIENT_HOST}#/activate/${activationToken}`
  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
          font-size: 24px;
          text-align: center;
        }
        a {
          display: block;
          text-align: center;
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 20px;
        }
        a:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Activate Account</h1>
        <a href="${href}">${href}</a>
      </div>
    </body>
    </html>`;

  return send({email, html, subject: 'Activate'})
}

export const emailService = {
  sendActivationEmail, send
}