/*
 * Bootstrapping the application. This starts up the Express server, retrieving the port number from
 * the Awilix container.
 */
import express from 'express';
import routes from './routes.js';
import container from './container.js';

const app = express();
app.use('/api', routes);
const port = container.resolve('expressPort');
app.listen(port, () => {
  console.log(`Server running; get dad jokes from http://localhost:${port}/api/joke`);
});
