import express, {Application} from 'express';
import tenantParser from './routes/middleware/tenant-parser.middleware';
import {healthRouter} from './routes/api/health.controller';
import {menuRouter} from './routes/api/menu.controller';
import path from "path";

export default (): Application => {
    const app: Application = express();
    const baseApiRoute = '/api';

    // Static client resources
    app.use(express.static(path.join(__dirname,"..", "client")));

    // Middleware
    app.use(express.json());
    // app.use(errorMiddleware);
    app.use(tenantParser);

    // Controllers
    app.use(baseApiRoute, healthRouter);
    app.use(baseApiRoute, menuRouter);

    return app;
};