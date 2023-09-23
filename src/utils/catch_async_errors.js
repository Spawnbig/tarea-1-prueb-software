const catchAsyncErrors = (controllerFunc) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}

module.exports = catchAsyncErrors;