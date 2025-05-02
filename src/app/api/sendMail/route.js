
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();

    if (!formData.email) {
      return NextResponse.json({ message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'humagainjiwan@gmail.com',
      subject: `[Contact Portfolio] ${formData.subject}`,
      text: `Details Emtered by Client
        FirstName: ${formData.fName}
        LastName: ${formData.lName}
        Email: ${formData.email}
        PhoneNumber:${formData.phoneNumber}
        Message: ${formData.message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
    );
  }
}
