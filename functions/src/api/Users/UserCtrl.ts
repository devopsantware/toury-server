import * as express from 'express';
import * as functions from 'firebase-functions';
import { getExpress } from '../../index';
import { ResponseMessage } from '../../shared/utils/ResponseMessage';
import UserServ from './UserServ';

const user = getExpress();

user.post('/delete', async (request: express.Request, response: express.Response) => {
    const responseMessage = new ResponseMessage();
    try {
        await UserServ.deleteUser(request.body.userId);
        responseMessage.create('User deleted successfully!');
    } catch (error) {
        console.error('user/delete: ', error);
        response.status(500).send('An error occurred while deleting user');
    }
    response.send(responseMessage);
});

exports.customer = functions.https.onRequest(user);
