import ILogger from "../types/logger/Logger";
import winston, { Logger as WinstonLogger } from 'winston';

class Logger implements ILogger {

    static instance: WinstonLogger;

    SUCCESS_FILE_PATH: string = "";
    WARN_FILE_PATH: string = "";
    ERROR_FILE_PATH: string = "";
    INFO_FILE_PATH: string = "";

    constructor() {
        if (Logger.instance) {
            throw new Error("Logger already instantiated.");
        }
        Logger.instance = winston.createLogger({
            levels: {
                error: 0,
                warn: 1,
                info: 2,
                success: 3
            },
            transports: [
                new winston.transports.File({
                    filename: 'logs/info.log',
                    level: 'info'
                }),
                new winston.transports.File({
                    filename: 'logs/error.log',
                    level: 'error'
                }),
                new winston.transports.File({
                    filename: 'logs/warn.log',
                    level: 'warn'
                }),
                new winston.transports.File({
                    filename: 'logs/success.log',
                    level: 'success'
                })
            ]
        });
    }

    getInstance(): WinstonLogger {
        return Logger.instance;
    }

    getStringifiedNow = () => {
        const now = new Date();
        return now.toUTCString();
    }

    enableConsoleLogging = () => {
        this.getInstance().add(new winston.transports.Console({
            format: winston.format.simple()
        }))
    };

    logSuccess = (message: string) => {
        this.getInstance().log('success', this.getStringifiedNow() + " " + message);
    }

    logError = (message: string, stack?: string) => {
        this.getInstance().log('error', this.getStringifiedNow() + ' ' + message + "\n" + stack);
    };

    logInfo = (message: string) => {
        this.getInstance().log('info', this.getStringifiedNow() + " " + message);
    };

    logWarning = (message: string, stack?: string) => {
        this.getInstance().log('error', this.getStringifiedNow() + ' ' + message + "\n" + stack);
    };

}

export default Logger;