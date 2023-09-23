const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCar = async (car) => {
    return await prisma.car.create({
        data: car,
    });
};

const getCarById = async (id) => {
    return await prisma.car.findUnique({
        where: {
            id: parseInt(id),
        },
    });
};

const updateCar = async (id, car) => {
    return await prisma.car.update({
        where: {
            id: parseInt(id),
        },
        data: car,
    });
};

const getVehiclesFromQuery = async (query) => {
    return await prisma.car.findMany({
        where: query,
    });
}


module.exports = {
    createCar,
    getCarById,
    updateCar,
    getVehiclesFromQuery,
};
