/*
 * Stands up the Awilix container. This is the single location where all the dependencies and values
 * to be injected are registered. The rest of your application does not have to know anything about
 * how to get these dependencies and values; they just get them from the Awilix container.
 *
 * We illustrate two common Awilix registration types here:
 *
 * - `asClass()` instantiates the given class when it is needed. An Awilix dependency proxy is
 *   passed into the constructor, allowing you to retrieve dependencies from it by name.
 * - `asValue()` registers a simple value, such as a string or number.
 *
 * There are other registration types available; see the Awilix documentation for details.
 */
import { createContainer, asClass, asValue } from 'awilix';
import { JokeService } from './joke-service.js';
import { JokeController } from './joke-controller.js';

const container = createContainer();
container.register({
  expressPort: asValue(process.env.PORT ?? 80),
  jokeController: asClass(JokeController).singleton(),
  jokeService: asClass(JokeService).singleton(),
  userAgent: asValue(process.env.USER_AGENT)
});
export default container;
