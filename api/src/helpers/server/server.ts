import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export function buildExpressServer(): Application {
    const app: Application = express();

    app.use(bodyParser.json());
    app.use(cors());

    return app;
}