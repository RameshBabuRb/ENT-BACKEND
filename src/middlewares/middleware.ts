import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const jwtSecretKey = "";


const excludedPaths = [
    "/v1/users/existing-user",
    "/v1/users/create-user",
]


export interface AuthenticatedRequest extends Request {
    body: any;
    path: string;
    headers: any;
    email?: string;
    file?: {
        mimetype: any;
        originalname: any;
        path: string;
    }; // Ensure `file` property is defined
}

const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (
        excludedPaths.includes(req.path)) {
        console.log('Path excluded from token verification:', req.path);
        return next();
    }

    if (!token) {
        return res.status(401).json({ error: 'Token not provided.' });
    }

    jwt.verify(token, jwtSecretKey, (err: jwt.JsonWebTokenError | null, decoded: any) => {
        if (err) {
            if (err instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: 'Token Expired' });
            }
            return res.status(401).json({ message: 'Invalid Token' });
        }

        req.email = decoded?.email; // Store the email in the request object
        next();
    });
};

export default verifyToken;