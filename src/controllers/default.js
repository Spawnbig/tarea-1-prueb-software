const req = require('express/lib/request');
const { generateVehicles } = require('../utils/generator');
const carRepository = require('../repository/CarRepository');

const vehicles = generateVehicles(10);

const helloWorld = (req, res) => {
    res.send('Hello World!');
};

const getCars = async (req, res) => {
    const result = await carRepository.getCars();
    res.json(result);
};

const addRandomCars = async (req, res) => {
    vehicles.forEach(async (vehicle) => {
        const result = await carRepository.createCar(vehicle);
    }
    );
    res.json({ message: 'Cars added' });
};

module.exports = {
    helloWorld,
    addRandomCars,
    getCars,
};
