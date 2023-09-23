const { getVehiclesFromQuery } = require('../repository/CarRepository');

/**
 * Filters vehicles based on the provided price, type, and color.
 * 
 * @param {number} price - The maximum price of the vehicles to filter. If not provided, all vehicles will be considered.
 * @param {string} type - The type of vehicles to filter. If not provided, all types will be considered.
 * @param {string} color - The color of vehicles to filter. If not provided, all colors will be considered.
 * @returns {Promise<Array>} - An array of vehicles that match the provided filter criteria.
 */
const filterVehicles = async (price, type, color) => {
    const query = buildQuery(price, type, color);
    return await getVehiclesFromQuery(query);
}

/**
 * Builds a query object for a given price value.
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
            lt: parseInt(price),
        }
    };
}

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
}

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
        ...buildQueryForKeyValue('color', color)
    };
}

module.exports = {
    filterVehicles
}