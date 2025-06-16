/*
 * The router module to route HTTP requests to the appropriate controller methods. The controller
 * instance is retrieved by retrieving it directly from the Awilix container.
 */
import { Router } from 'express';
import container from './container.js';
import errorHandler from './error-handler.js';

const router = Router();
const jokeController = container.resolve('jokeController');
router.get('/joke', (req, res) => jokeController.get(req, res));
router.use(errorHandler);
export default router;
