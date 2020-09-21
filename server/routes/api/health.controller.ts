import {Request, Response, Router} from 'express';
import Health from '../../types/health';

export const healthRouter = Router();
const healthPath: string = '/health';

healthRouter.get(healthPath, (_request: Request, response: Response): void => {
    try {
        const healthy: Health = new Health('UP');
        response.send(healthy);
    } catch (e) {
        response.status(500).send(e.message);
    }
});