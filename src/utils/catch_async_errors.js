const catchAsyncErrors = (controllerFunc) => {
    return (req, res, next) => {
        controllerFunc(req, res, next).catch(error => {
            console.error(error); // Imprime el error
            next(error); // Pasa el error al siguiente middleware
        });
    };
}

module.exports = catchAsyncErrors;
