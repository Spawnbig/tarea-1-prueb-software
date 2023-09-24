const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


/**
 * Adds a new vehicle to a database.
 * 
 * @param {object} vehicles - The vehicle object to add to the database.
 * @returns {Promise<Object>} - The vehicle object that was added to the database.
 */
const createCar = async (vehicles) => {
    return await prisma.vehicles.create({
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

/**
 * Updates the popularity of vehicles in a database.
 * It increments the popularity of vehicles that match a given query and then retrieves the updated vehicles.
 *
 * @param {object} query - A query object specifying the criteria for selecting the vehicles to update.
 * @returns {Promise<Array>} - An array of vehicles that match the given query and have their popularity updated.
 */
const incrementPopularity = async (query) => {
    await prisma.vehicles.updateMany({
        where: query,
        data: {
            popularity:{
                increment: 1
            }
        }
    });
    return await getVehiclesFromQuery(query);
}

/**
 * Increments the popularity of a vehicle with a given ID and then retrieves the updated vehicle.
 * @param {*} id  - The ID of the vehicle to update.
 * @returns {Promise<Object>} - The vehicle with the given ID and its popularity updated.
 */
const incrementPopularityById = async (id) => {
    const vehicle = 
    await prisma.vehicles.update({
        where: {
            id: parseInt(id),
        },
        data: {
            popularity: {
                increment: 1,
            },
        },
    });
    return vehicle;
};




module.exports = {
    createCar,
    getVehiclesFromQuery,
    incrementPopularity,
    incrementPopularityById,
};
