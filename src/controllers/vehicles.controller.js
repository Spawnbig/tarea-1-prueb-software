const { filterVehicles } = require('../services/vehicles.service');
const catchAsyncErrors = require('../utils/catch_async_errors');

/**
 * A callback function used as a parameter for the 'catchAsyncErrors' function.
 * It filters vehicles based on the provided query parameters and returns the filtered vehicles as a JSON response.
 *
 * @param {Object} req - The request object containing the query parameters.
 * @param {Object} res - The response object used to send the JSON response.
 * @returns {Promise<void>} - The filtered vehicles as a JSON response.
 */
const searchVehicles = catchAsyncErrors(async (req, res) => {
    const { price, type, color } = req.query;
    const filteredVehicles = await filterVehicles(price, type, color)
    res.json(filteredVehicles);
})

module.exports = {
    searchVehicles
}