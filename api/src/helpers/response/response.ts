import { Response } from "express";

class HttpResponse {
    _res: Response;

    constructor(res: Response) {
        this._res = res;
    }

    sendSuccess(message: string, data: any) {
        this._res.status(200).json({ message, data });
    }

    sendBadRequest(code: string, error: string) {
        this._res.status(400).json({ error, code });
    }

    sendUnauthorized() {
        this._res.status(401);
    }

    sendNotFound() {
        this._res.status(404);
    }

    sendInternalFailure(code: string, error: string) {
        this._res.status(500).json({ code, error });
    }

}

export default HttpResponse;