import dotenv from 'dotenv';
import { Application } from "express";
import { buildExpressServer } from "./helpers/server/server";

dotenv.config();

import config from './config/config';
import Logger from './logger/Logger';
import Mysql from './db/mysql/mysql';

const apiServer: Application = buildExpressServer();

apiServer.listen(config.port, function bootstrapApp() {
    const logger = new Logger();
    if (config.environment === "dev") {
        logger.enableConsoleLogging();
    }
    const mysql = new Mysql();
    mysql.getConnection()
        .then((connection) => {
            logger.logSuccess("Successfully connected to mysql instance.");
            mysql.destroyConnection(connection);
        });
    logger.logInfo("Server started successfully at port: " + config.port + " on environment: " + config.environment);
})