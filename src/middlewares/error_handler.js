/**
 * Middleware function to handle errors.
 * 
 * @param {Error} err - The error object that is passed to the middleware.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).send('Request cannot be processed.');
}

module.exports = errorHandlerMiddleware;
