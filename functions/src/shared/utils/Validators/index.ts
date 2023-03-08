import { Request, Response, NextFunction } from 'express';
const Joi = require('joi');

export const validateParams = function (paramSchema: any) {
    return async (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object(paramSchema);
        const validation = schema.validate(request.body);
        if (validation.error) {
            response.status(404).send(validation.error.message);
            return;
        }
        next();
    };
};

export const validateQueries = function (paramSchema: any) {
    return async (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object(paramSchema);
        const validation = schema.validate(request.query);
        if (validation.error) {
            response.status(404).send(validation.error.message);
            return;
        }
        next();
    };
};
