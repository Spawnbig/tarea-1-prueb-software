/**
 * Wraps a controller function with error handling middleware.
 *
 * @param {function} controllerFunc - The controller function that needs to be wrapped with error handling.
 * @returns {function} - A new function that can be used as middleware in an Express application to handle asynchronous errors.
 */
const catchAsyncErrors = (controllerFunc) => {
    return (req, res, next) => {
        controllerFunc(req, res, next).catch((error) => {
            console.error(error);
            next(error);
        });
    };
};

module.exports = catchAsyncErrors;
