const { vehicleGenerator } = require('../services/generator.service');
const catchAsyncErrors = require('../utils/catch_async_errors');

const generateVehicles = catchAsyncErrors(async (req, res) => {
    const numberOfVehicles = req.params.numberOfVehicles;
    await vehicleGenerator(numberOfVehicles);
    res.json({ message: `Generated ${numberOfVehicles} vehicles` });
});

module.exports = {
    generateVehicles
}