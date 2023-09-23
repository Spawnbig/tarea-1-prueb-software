const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).send('Error interno del servidor');
}

module.exports = errorHandlerMiddleware;
