
import nodemailer from 'nodemailer';

export async function sendEmail(receiver: string, subject: string, message: string): Promise<boolean> {
    try {
        const transporter = nodemailer.createTransport({
            // host: '',
            // port: 465,
            service: 'gmail',
            secure: true,
            auth: {
                user: 'rameshpersonal99@gmail.com',
                pass: 'eggq mifj loim oxpi',
            },
        });
        const mailOptions = {
            from: 'rameshpersonal99@gmail.com',
            to: 'rameshpersonal99@gmail.com',
            cc: 'naveenkumarrnk2701@gmail.com,jpdhinesh2002@gmail.com',
            subject: subject,
            html: message,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return true;
    } catch (error) {
        console.log('Error sending email:', error);
        return false;
    }
}