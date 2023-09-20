const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCar = async (car) => {
    return await prisma.car.create({
        data: car,
    });
}

const getCars = async () => {
    return prisma.car.findMany();
}

const getCarById = async (id) => {
    return await prisma.car.findUnique({
        where: {
            id: parseInt(id),
        },
    });
}

const  updateCar = async (id, car) => {
    return await prisma.car.update({
        where: {
            id: parseInt(id),
        },
        data: car,
    });
}

const deleteCar = async (id) => {
    return await prisma.car.delete({
        where: {
            id: parseInt(id),
        },
    });
}

const getCarByColor = async (color) => {
    return await prisma.car.findMany({
        where: {
            color: color,
        },
    });
}

const getCarByPrice = async (maxPrice) => {
    return await prisma.car.findMany({
        where: {
            price: {
                lt: maxPrice, // lt significa "menor que"
            },
        },
    });
}


const getCarByType = async (type) => {
    return await prisma.car.findMany({
        where: {
            type: type,
        },
    });
}


module.exports = {
    createCar,
    getCars,
    getCarById,
    updateCar,
    deleteCar,
    getCarByColor,
    getCarByPrice,
    getCarByType,
};





    