import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import { getExpress } from '../../index';
import { ResponseMessage } from '../../shared/utils/ResponseMessage';
import * as Joi from 'joi';
import { validateParams } from '../../shared/utils/Validators';
import FCMServ from './FCMServ';

const FCM = getExpress();

const sendFCMSchema = {
    userId: Joi.string(),
    notification: {
        title: Joi.string().required(),
        body: Joi.string().required()
    }
};

FCM.post('/send', validateParams(sendFCMSchema), async (request: express.Request, response: express.Response) => {
    const responseMessage = new ResponseMessage();
    try {
        const token = await FCMServ.getToken(request.body);
        if (!token) {
            response.status(500).send('There was a problem getting the token');
            return;
        }
        const notification = request.body.notification;
        const data = {
            notification,
            token
        };
        await admin.messaging().send(data);
        responseMessage.create('Firebase cloud message sent successfully!');
    } catch (error) {
        console.error('send: ', error);
        response.status(500).send('An error occurred while sending firebase cloud message');
    }
    response.send(responseMessage);
});

const sendFCMMultipleSchema = {
    tokens: Joi.array().items(Joi.string()).required(),
    notification: {
        title: Joi.string().required(),
        body: Joi.string().required()
    }
};

FCM.post(
    '/sendMultiple',
    validateParams(sendFCMMultipleSchema),
    async (request: express.Request, response: express.Response) => {
        const responseMessage = new ResponseMessage();
        try {
            const tokens = request.body.tokens;
            const notification = request.body.notification;
            const data = {
                notification,
                tokens
            };
            await admin.messaging().sendMulticast(data);
            responseMessage.create('Firebase multicast cloud messages sent successfully!');
        } catch (error) {
            console.error('sendMultiple: ', error);
            response.status(500).send('An error occurred while sending firebase multicast cloud messages');
        }
        response.send(responseMessage);
    }
);

exports.FCM = functions.https.onRequest(FCM);
