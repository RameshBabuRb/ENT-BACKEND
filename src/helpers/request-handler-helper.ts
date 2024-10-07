import { Request, Response, NextFunction } from 'express';

const logRequest = (req: Request, res: Response, next: NextFunction) => {
    const { method, url, params } = req;
    console.log('Incoming Request:', url, 'Method:', method,);
    res.on('finish', () => {
        console.log('Response Status Code:', res.statusCode);
    });
    next();
};

export default logRequest;
