import {NextFunction, Request, Response} from "express";
import HttpException from "./types/HttpException";

const TENANT_HEADER = "x-tenant-id";

export default (request: Request, _response: Response, next: NextFunction) => {
    const tenantId = request.header(TENANT_HEADER);
    if (tenantId === undefined) {
        next(new HttpException(400, `Missing ${TENANT_HEADER} header`));
    } else {
        // @ts-ignore
        request.tenantId = tenantId;
        next();
    }
};
