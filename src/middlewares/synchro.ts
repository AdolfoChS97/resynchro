import { NextFunction, Request, Response } from "express";

export const synchro = (req: Request, res: Response, next: NextFunction) => {
    req.body = new Object({ 'media-server-token': req.headers['media-server-token']});
    next();
}

