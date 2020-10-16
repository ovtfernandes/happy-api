import { Router } from 'express';
import orphanagesController from './controllers/orphanages-controller';

const routes = Router();

routes.get('/orphanages', orphanagesController.index);
routes.post('/orphanages', orphanagesController.create);

export default routes;
