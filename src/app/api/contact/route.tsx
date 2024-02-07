import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: NextRequest) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const reqData = await request.json();
  const {
    name,
    email,
    company,
    message
  } = reqData;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: username,
      pass: password
    }
  });

  try {
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `HLD - Contact from website: ${email}`,
      html: `
      <p>Name: ${name} </p>
      <p>Company: ${company} </p>
      <p>Email: ${email} </p>
      <p>Message: ${message} </p>
      `,
    });
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
      console.log(error)
      return NextResponse.json({ message: "Error: Could not send message" }, { status: 500 });
  };
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
};