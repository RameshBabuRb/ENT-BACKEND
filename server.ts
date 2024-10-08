import express, { Request, Response } from 'express';

import bodyParser from 'body-parser'
import cors from 'cors';
import sequelize from './database/database';

// import logRequest from './src/helpers/request-handler-helper'
import setupRoutes from './src/routes/index-route'
import { successPage } from './success-page';
import './src/models/index-model'
// import { decrypt, encrypt } from './src/helpers/encrypt-decrypt-helper';
import fs from 'fs';
import https from 'https';
import path from 'path';
import logRequest from './src/helpers/request-handler-helper';
import verifyToken from './src/middlewares/middleware';
const app: any = express()
const port = 8080

//  Configure SSL/TLS certificates
// const options = {
//     key: fs.readFileSync('certs/private/key.pem'),
//     cert: fs.readFileSync('certs/public/certificate.pem')
// };

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors());
// app.use(verifyToken)
app.use(logRequest)
setupRoutes(app)

app.get('/', (req: Request, res: Response) => {
     res.status(200).json({ message: "connected" })
});
sequelize
    .authenticate()
    .then(() => {
        console.log('connected to database successfully');
        app.listen(port, () => {
            console.log(`Server is running at ⚡⚡⚡⚡⚡ ${port} ⚡⚡⚡⚡⚡`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
