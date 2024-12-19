import config from '../config';
import { AppError } from '../errors/AppError';
import { TUserRole } from '../modules/user/user.interface';
import { catchAsync } from '../utils/catchAsync';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are no authorized');
    }

    //check if the token is valid
    jwt.verify(token, config.jwt, function (err, decoded) {
      if (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }
      const role = (decoded as JwtPayload).role

      if (requiredRoles && !requiredRoles.includes(role)){
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }
        req.user = decoded as JwtPayload;
    });

    next();
  });
};
