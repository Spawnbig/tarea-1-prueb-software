const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCar = async (vehicles) => {
    return await prisma.vehicles.create({
        data: vehicles,
    });
};

const getCarById = async (id) => {
    return await prisma.car.findUnique({
        where: {
            id: parseInt(id),
        },
    });
};

const updateCar = async (id, vehicles) => {
    return await prisma.vehicles.update({
        where: {
            id: parseInt(id),
        },
        data: vehicles,
    });
};

/**
 * Retrieves vehicles from a database using a query.
 * 
 * @param {object} query - The query object that specifies the filter conditions for the vehicles to retrieve from the database.
 * @returns {Promise<Array>} - An array of vehicles that match the query conditions.
 */
const getVehiclesFromQuery = async (query) => {
    return await prisma.vehicles.findMany({
        where: query,
    });
}


module.exports = {
    createCar,
    getCarById,
    updateCar,
    getVehiclesFromQuery,
};
