const { generateVehicles } = require('../utils/generator');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const vehicles = generateVehicles(10);

const helloWorld = (req, res) => {
    res.send('Hello World!');
};

const getCars = async (req, res) => {
    const result = await prisma.car.findMany();
    res.json(result);
};

const addRandomCars = async (req, res) => {
    /*let vehicle = { ...vehicles[0]};
    const result = await prisma.car.create({
        data: vehicle,
    });
    res.json(result);*/

    vehicles.forEach(async (vehicle) => {
        //console.log(vehicle);
        const result = await prisma.car.create({
            data: vehicle,
        });
    }
    );
    res.json({ message: 'Cars added' });
};

module.exports = {
    helloWorld,
    addRandomCars,
    getCars,
};
