const { generateVehicles } = require("../utils/generator")
const CarRepository = require("../repository/CarRepository");

const vehicleGenerator = async (number) => {
    const vehicles = generateVehicles(number);
    for (const vehicle of vehicles) {
        await CarRepository.createCar(vehicle);
    }
}

module.exports = {
    vehicleGenerator
}