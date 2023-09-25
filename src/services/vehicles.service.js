const {
    getVehiclesFromQuery,
    incrementPopularity,
} = require('../repository/vehicle.repository');

/**
 * Filters vehicles based on the provided parameters.
 * If the request is made by an agent, the popularity of the vehicles is incremented and included on the response.
 *
 * @param {Object} queryParameters - The filter options.
 * @param {number} queryParameters.price - The maximum price of the vehicles to filter.
 * @param {string} queryParameters.type - The type of vehicles to filter (e.g., sedan, SUV).
 * @param {string} queryParameters.color - The color of vehicles to filter.
 * @param {any} isAgentPresent - Indicates if the user is an agent.
 * @returns {Promise<Array<Object>>} - An array of vehicles that match the provided parameters, optionally updated if the user is an agent.
 */
const findVehicles = async ({ price, type, color }, isAgentPresent) => {
    const query = buildQuery(price, type, color);
    const vehicles = await getVehiclesFromQuery(query);
    return isAgentPresent
        ? (incrementPopularity(query), vehicles)
        : vehicles.map(({ popularity, ...vehicleResponse }) => vehicleResponse);
};

/**
 * Increments the popularity of a vehicle with a given ID and then retrieves the updated vehicle.
 * @param {*} id - The ID of the vehicle to update.
 * @returns {Promise<Object>} - The vehicle with the given ID and its popularity updated.
 */
const contactAgency = async (id) => {
    const vehicleQuery = buildIdQuery(id);
    const vehicle = await incrementPopularity(vehicleQuery);
    return vehicle;
};

/**
 * Builds a query object for a given price value that matches vehicles with a price less than or equal to the provided value.
 *
 * @param {number} price - The price value to build the query for.
 * @returns {Object} - An object with a nested `price` property, which has a `lt` * property set to the parsed integer
 * value of the `price` parameter. If the `price` parameter is falsy, an empty object is returned.
 * @Error {Error} - Throws an error if the `price` parameter is not a number.
 */
const buildPriceQuery = (price) => {
    if (!price) return {};
    return {
        price: {
            // Less than or equal
            lte: parseInt(price),
        },
    };
};

// WIP
const buildIdQuery = (id) => {
    if (!id) return {};
    return {
        id: parseInt(id),
    };
};

/**
 * Builds a query object for a given key-value pair.
 *
 * @param {string} key - The key for which the query object should be built.
 * @param {string} value - The value to be set for the given key in the query object.
 * @returns {object} - An object with a property set to the value of the `key` parameter and its value set to the `value` parameter.
 * If the `value` parameter is falsy, an empty object `{}` is returned.
 */
const buildQueryForKeyValue = (key, value) => {
    if (!value) return {};
    return { [key]: value };
};

/**
 * Constructs a query object based on the provided price, type, and color parameters.
 * @param {number} price - The maximum price of the vehicles to be included in the query.
 * @param {string} type - The type of vehicles to be included in the query.
 * @param {string} color - The color of vehicles to be included in the query.
 * @returns {object} - The query object for filtering vehicles based on the provided parameters.
 */
const buildQuery = (price, type, color) => {
    return {
        ...buildPriceQuery(price),
        ...buildQueryForKeyValue('type', type),
        ...buildQueryForKeyValue('color', color),
    };
};

module.exports = {
    findVehicles,
    contactAgency,
};
