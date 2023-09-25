const { vehicleGenerator } = require('../services/generator.service');
const catchAsyncErrors = require('../utils/catch_async_errors');

/**
 * Generates the specified number of vehicles and save into BD.
 *
 * @param {Object} req - The HTTP request object containing the parameters.
 * @param {Object} res - The HTTP response object used to send the response back to the client.
 * @returns {Promise<void>} - A promise that resolves when the generation is complete.
 */
const generateVehicles = catchAsyncErrors(async (req, res) => {
    const numberOfVehicles = req.params.numberOfVehicles;
    await vehicleGenerator(numberOfVehicles);
    res.json({ message: `Generated ${numberOfVehicles} vehicles` });
});

module.exports = {
    generateVehicles,
};
