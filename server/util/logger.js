import winston from 'winston';
// Imports the Google Cloud client library for Winston
import gcWinston from '@google-cloud/logging-winston';
import validateEnv from './validateEnv';

const { KEY_FILE, PROJECT_ID } = validateEnv();

const loggingWinston = new gcWinston.LoggingWinston({
    projectId: PROJECT_ID,
    keyFilename: KEY_FILE,
});

// Create a Winston logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        // Add Stackdriver Logging
        loggingWinston,
    ],
});
export default logger;
