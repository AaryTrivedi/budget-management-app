import { Logger as WinstonLogger } from "winston";

export default interface ILogger {
    // variables
    SUCCESS_FILE_PATH: string;
    ERROR_FILE_PATH: string;
    WARN_FILE_PATH: string;
    INFO_FILE_PATH: string;

    // functions
    getInstance: () => WinstonLogger;
    getStringifiedNow: () => string;

    enableConsoleLogging: () => void;
    logSuccess: (message: string) => void;
    logInfo: (message: string) => void;
    logError: (message: string, stack?: string) => void;
    logWarning: (message: string, stack?: string) => void;
}