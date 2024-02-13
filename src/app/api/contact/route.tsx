import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
// const nodemailer = require('nodemailer');

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

// We are using a mail API service called Resend
// To avoid not being able to send an email when connected to a VPN

export async function POST(request: NextRequest) {
  // const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  // const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL || '';
  const workEmail = process.env.NEXT_PUBLIC_HLD_EMAIL || '';

  const reqData = await request.json();
  const {
    name,
    email,
    company,
    message
  } = reqData;

  try {
    const response = await resend.emails.send({
      from: workEmail,
      to: [myEmail],
      subject: `HLD - Contact from website: ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Company: ${company} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
      `
    });
    if(!response.error) {
      return NextResponse.json({ message: "Success: email was sent" });
    } else {
      console.log(response.error);
      return NextResponse.json({ message: `Error: ${response.error.message}` }, { status: 500 });
    }
  } catch(err) {
    console.log(err);
    return NextResponse.json({ message: "Error: Could not send message" }, { status: 500 });
  }

  // const transporter = nodemailer.createTransport({
  //   host: "smtp-mail.outlook.com",
  //   port: 587,
  //   secure: false,
  //   tls: {
  //     ciphers: "SSLv3",
  //     rejectUnauthorized: false,
  //   },
  //   auth: {
  //     user: username,
  //     pass: password
  //   }
  // });

  // try {
  //   await transporter.sendMail({
  //     from: username,
  //     to: myEmail,
  //     replyTo: email,
  //     subject: `HLD - Contact from website: ${email}`,
  //     html: `
  //     <p>Name: ${name} </p>
  //     <p>Company: ${company} </p>
  //     <p>Email: ${email} </p>
  //     <p>Message: ${message} </p>
  //     `,
  //   });
  //   return NextResponse.json({ message: "Success: email was sent" });
  // } catch (error) {
  //     console.log(error)
  //     return NextResponse.json({ message: "Error: Could not send message" }, { status: 500 });
  // };
};

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '1mb',
//     },
//   },
//   // Specifies the maximum allowed duration for this function to execute (in seconds)
//   maxDuration: 5,
// };