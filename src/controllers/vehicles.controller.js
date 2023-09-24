const { findVehicles, contactAgency } = require('../services/vehicles.service');
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
    const { price, type, color, isAgent } = req.query;
    const filteredVehicles = await findVehicles({
        price,
        type,
        color,
    }, isAgent);
    res.json(filteredVehicles);
})

/**
 * A callback function used as a parameter for the 'catchAsyncErrors' function.
 * It increments the popularity of a vehicle with a given ID and then retrieves the updated vehicle.
 * 
 * @param {Object} req - The request object containing the ID of the vehicle to update.
 * @param {Object} res - The response object used to send the JSON response.
 * @returns {Promise<void>} - The updated vehicle as a JSON response.
 */
const contactAgencyById = catchAsyncErrors(async (req, res) => {
    const { id } = req.params;
    const vehicle = await contactAgency(id);
    res.json(vehicle);
})


module.exports = {
    searchVehicles,
    contactAgencyById
}