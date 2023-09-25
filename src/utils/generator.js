const { BRANDS, COLORS, VEHICLE_TYPE } = require('./constants');

/**
 * Generates a specified number of vehicles with random attributes such as brand, year, color, price, and turbo.
 *
 * @param {number} numberOfVehicles - The number of vehicles to generate.
 * @returns {Array} - An array of objects representing the generated vehicles, each with random attributes.
 */
const generateVehicles = (numberOfVehicles) => {
    const vehicles = [];
    for (let i = 0; i < numberOfVehicles; i++) {
        vehicles.push({
            brand: getRandomFromArray(BRANDS),
            year: getRandomNumberBetween(2015, 2018),
            color: getRandomFromArray(COLORS),
            price: getRandomNumberBetween(8000000, 30000000),
            turbo: getRandomFromArray([true, false]),
            ...processTypeAttributes(getRandomFromArray(VEHICLE_TYPE)),
        });
    }
    return vehicles;
};

/**
 * Returns a random element from the given array.
 *
 * @param {Array} array - The array from which a random element will be selected.
 * @returns {*} - A random element from the input array.
 */
const getRandomFromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

/**
 * Generates a random number between a given minimum and maximum value.
 *
 * @param {number} min - The minimum value for the random number.
 * @param {number} max - The maximum value for the random number.
 * @returns {number} - A random number between the given `min` and `max` values.
 */
const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Takes in an object of vehicle type attributes and processes them by converting any arrays into a random value from the array.
 *
 * @param {object} vehicleTypeAttributes - An object containing attributes for a vehicle type. The keys represent the attribute
 * names, and the values can be either a single value or an array of values.
 * @returns {object} - An object with the same keys as the input attributes object, but with any arrays replaced by a random
 * value from the array.
 */
const processTypeAttributes = (vehicleTypeAttributes) => {
    return Object.fromEntries(
        Object.entries(vehicleTypeAttributes).map(([key, value]) => [
            key,
            Array.isArray(value) ? getRandomFromArray(value) : value,
        ])
    );
};

module.exports = {
    generateVehicles,
};
