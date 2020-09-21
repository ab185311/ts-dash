import winston from 'winston';
import path from "path";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join("log", "dashboard.log"),
            maxsize: 1024,
            maxFiles: 10,
        }),
    ],
});
export default logger;
