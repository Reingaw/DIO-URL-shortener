import { Router } from 'express';
import { URLController } from '../controller/URLController';

const routes = Router();

const urlController = new URLController();
routes.post('/shorten', urlController.shorten);

routes.get('/:hash', urlController.redirect);

export default routes;