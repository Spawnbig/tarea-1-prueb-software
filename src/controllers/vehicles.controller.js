const VehicleServices = require('../services/vehicles.service');
const filterVehicles = async (req, res) => {
    const { price, type, color } = req.query;
    const filteredVehicles = await VehicleServices.filterVehicles(price, type, color)
    res.json(filteredVehicles);
}

module.exports = {
    filterVehicles
}