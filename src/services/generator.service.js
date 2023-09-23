const { generateVehicles } = require("../utils/generator")
const CarRepository = require("../repository/CarRepository");

/**
 * Asynchronous function that generates a specified number of vehicles.
 * 
 * @param {number} number - The number of vehicles to generate.
 * @returns {Promise<void>} - A promise that resolves when all vehicles are created.
 */
const vehicleGenerator = async (number) => {
    const vehicles = generateVehicles(number);
    for (const vehicle of vehicles) {
        await CarRepository.createCar(vehicle);
    }
}

module.exports = {
    vehicleGenerator
}