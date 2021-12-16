import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import _ from 'lodash';
import { ApiException } from '../exception/api.exception';

export enum RequestSource {
  BODY = 'body',
  QUERY = 'query',
  PARAMS = 'params'
}
const validate =
  (schema: Schema, property = RequestSource.BODY) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = schema.validate(req[property], {
      errors: {
        wrap: {
          label: false
        }
      },
      allowUnknown: false,
      abortEarly: false,
      stripUnknown: true,
      convert: true
    });

    if (error) {
      const message = _.first(error.details)!.message;
      throw new ApiException(422, message);
      // return next(new ApiException(422, message));
    }

    req[property] = value;

    return next();
  };

export default validate;
