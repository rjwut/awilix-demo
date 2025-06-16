/**
 * Handles any errors that occur during request processing.
 *
 * @param {Error} error - the error that was thrown
 * @param {HttpRequest} _req - the HTTP request (not used)
 * @param {HttpResponse} res - the HTTP response
 * @param {Function} _next - the next middleware function (not used)
 */
const errorHandler = (error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: error.message });
};
export default errorHandler;
