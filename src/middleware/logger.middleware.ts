import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request, Response } from "express";
import Logging from "library/Logging";

@Injectable()
export class LoggerMiddlware implements NestMiddleware{
    use(req: Request, res:Response, next: NextFunction){
        Logging.info(
            `Icoming -> Method [${req.originalUrl}] - Host: [${req.hostname}] -IP: [${req.socket.remoteAddress}]`,
        )

        if(next){
            next()
        }
    }
}