import {Request, Response} from "express";
import HttpException from "./types/HttpException";

// @ts-ignore
export default (error: HttpException, request: Request, response: Response) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response
        .status(status)
        .send({
            status,
            message
        })
}