/**
 * This is a simple controller class that handles HTTP requests for dad jokes. The `JokeService` it
 * queries for the jokes is provided by Awilix in the constructor.
 */
export class JokeController {
  #jokeService;

  /**
   * @param {JokeService} param0.jokeService - the service for fetching jokes
   */
  constructor({ jokeService }) {
    this.#jokeService = jokeService;
  }

  /**
   * Retrieves a random dad joke.
   *
   * @param {HttpRequest} _req - the HTTP request (not used)
   * @param {HttpResponse} res - the HTTP response
   * @returns {Promise<void>} - a `Promise` that resolves when the response is sent
   */
  async get(_req, res) {
    const { id, joke } = await this.#jokeService.getRandomJoke();
    res.json({ id, joke });
  }
}
