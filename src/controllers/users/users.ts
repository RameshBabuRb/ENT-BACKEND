import { Request, Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/middleware";
import user_details from "../../models/users/user-details-model";
import { forgotPasswordGenerated, generatedPassword } from "../../../constants/email-constants";
import { sendEmail } from "../../helpers/mail-helper";

function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
    return otp;
}



export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { mobile } = req.body;

        const checkExistingMobile = await user_details.findOne({
            where: { mobileNumber: mobile, isDeleted: false }
        });
        if (checkExistingMobile) {
            res.status(400).json({
                error: 'Mobile Number Already Exists.'
            });
            return;
        }
        let otp: any = generateOTP();
        const newUser = await user_details.create({
            mobileNumber: mobile,
            otp: otp
        });
        const emailSubject = 'Your Otp For ENT Platform' + " - " + new Date();
        const emailBody = generatedPassword.replace(/{otp}/g, otp);
        const EmailSent = await sendEmail('', emailSubject + Date.now(), emailBody);

        res.status(200).json({
            message: 'sucessfully user created',
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: "error creating user function." });
    }
};
export const verifyOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { mobile, otp } = req.body;

        const checkExistingMobile: any = await user_details.findOne({
            where: { mobileNumber: mobile, isDeleted: false }
        });

        if (checkExistingMobile.otp == otp) {
            res.status(200).json({
                error: 'success.'
            });
            return;
        } else {
            res.status(400).json({
                error: 'Invalid Otp.'
            });
            return;
        }
    } catch (error) {
        console.error('error in existing user check function', error);
        res.status(500).json({ error: "error in existing user verify otp function." });
    }
};
export const createPassowrd = async (req: Request, res: Response): Promise<void> => {
    try {
        const { password, mobile } = req.body;

        const checkExistingMobile = await user_details.findOne({
            where: { mobileNumber: mobile, isDeleted: false }
        });
        if (!checkExistingMobile) {
            res.status(400).json({
                error: 'User not found.'
            });
            return;
        }
        const newUser = await user_details.update({
            password: password
        }, {
            where: {
                mobileNumber: mobile,
            }
        });
        res.status(200).json({
            message: 'sucessfully password created.',
        });
    } catch (error) {
        console.error('Error creating password', error);
        res.status(500).json({ error: "Error creating password function." });
    }
};
export const userLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { mobile, password } = req.body;

        const checkExistingMobile = await user_details.findOne({
            where: { mobileNumber: mobile, password: password, isDeleted: false }
        });
        if (!checkExistingMobile) {
            res.status(400).json({
                error: 'Invalid credentials.'
            });
            return;
        }
        res.status(200).json({
            message: 'successfully login',
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const { mobile } = req.body;

        const checkExistingMobile = await user_details.findOne({
            where: { mobileNumber: mobile, isDeleted: false }
        });
        if (!checkExistingMobile) {
            res.status(400).json({
                error: 'User not found.'
            });
            return;
        }
        let otp: any = generateOTP();
        const newUser = await user_details.update({
            otp: otp
        }, {
            where: {
                mobileNumber: mobile,
            }
        });
        const emailSubject = 'Your Otp For ENT Platform' + " - " + new Date();
        const emailBody = forgotPasswordGenerated.replace(/{otp}/g, otp);
        const EmailSent = await sendEmail('', emailSubject + Date.now(), emailBody);

        res.status(200).json({
            message: 'otp sent successfully.',
        });
    } catch (error) {
        console.error('error in forgot password function:', error);
        res.status(500).json({ error: "error in forgot password function" });
    }
};