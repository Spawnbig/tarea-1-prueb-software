const { generateVehicles } = require('../utils/generator');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const vehicles = generateVehicles(1);

const helloWorld = (req, res) => {
    res.send('Hello World!');
};

const getCars = async (req, res) => {
    const result = await prisma.car.findMany();
    res.json(result);
};

const addRandomCars = async (req, res) => {
    let vehicle = { ...vehicles[0]};
    const result = await prisma.car.create({
        data: vehicle,
    });
    res.json(result);
};

module.exports = {
    helloWorld,
    addRandomCars,
    getCars,
};
