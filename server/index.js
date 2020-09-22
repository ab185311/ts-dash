import { app } from './app';
import logger from './util/logger';
import validateEnv from './util/validateEnv';

const application = app();
const { PORT } = validateEnv();

const server = application.listen(PORT, async () => {
    logger.info(`Application started. Listening on port: ${PORT}`);
});

// graceful shutdown handler
process.on('SIGTERM', async () => {
    logger.error('SIGTERM signal received.');
    logger.error('Closing http server.');
    server.close(async () => {
        logger.info('Http server closed.');
        process.exit(0);
    });
});
