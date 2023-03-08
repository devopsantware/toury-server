import * as admin from 'firebase-admin';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { validateFirebaseIdToken } from './auth';

const cors = require('cors')({ origin: true });
const cookieParser = require('cookie-parser')();

admin.initializeApp(functions.config().firebase);

export const getExpressNoAuth = (): any => {
    const app = express();
    app.use(cors);
    app.use(cookieParser);
    return app;
};

export const getExpress = (): any => {
    const app = getExpressNoAuth();
    app.use(validateFirebaseIdToken);
    return app;
};

export * from './api/FCM/FCMCtrl';
export * from './api/Users/UserCtrl';
