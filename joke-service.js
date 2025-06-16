/**
 * A service class encapsulating the logic to fetch a random dad joke from icanhazdadjoke.com. The
 * user agent string to report to the service is provided by Awilix in the constructor.
 */
export class JokeService {
  #userAgent;

  /**
   * @param {string} param0.userAgent - the user agent string to report to icanhazdadjoke.com
   */
  constructor({ userAgent }) {
    this.#userAgent = userAgent;
  }

  /**
   * @returns {Promise<Object>} - resolves to the response from icanhazdadjoke.com
   */
  async getRandomJoke() {
    if (!this.#userAgent) {
      throw new Error('User agent is required to fetch jokes');
    }

    return (await fetch(
      'https://icanhazdadjoke.com/',
      {
        headers: {
          Accept: 'application/json',
          'User-Agent': this.#userAgent,
        }
      }
    )).json();
  }
}
