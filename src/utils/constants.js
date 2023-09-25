/**
 * Defines an array of car brands.
 * This constant is used by the generateVehicles() function in src/utils/generator.js.
 * @constant {string[]} BRANDS - The array of car brands.
 */
const BRANDS = ['SUZUKI', 'DODGE', 'TOYOTA', 'BMW', 'HONDA'];

/**
 * Initializes an array called COLORS with a list of different colors.
 * This constant is used by the generateVehicles() function in src/utils/generator.js.
 * @constant {string[]} COLORS
 * @description The array contains five elements, which are different color names.
 */
const COLORS = ['RED', 'BLUE', 'GREEN', 'BLACK', 'WHITE'];

/**
 * Represents an array of vehicle types.
 * This constant is used by the generateVehicles() function in src/utils/generator.js.
 * @constant {Array} VEHICLE_TYPE
 */
const VEHICLE_TYPE = [
    {
        type: 'Sedan',
        motor: ['1.4cc', '1.6cc', '2.0cc'],
    },
    {
        type: 'Van',
        motor: ['2.4cc', '3.0cc', '4.0cc'],
        cabins: [1, 2],
    },
    {
        type: 'SUV',
        motor: ['1.8cc', '2.2cc', '2.8cc'],
        sunRoof: [true, false],
    },
];

const GENERATORROUTES_PREFIX = '/generator';
const VEHICLESROUTES_PREFIX = '/vehicles';

module.exports = {
    BRANDS,
    COLORS,
    VEHICLE_TYPE,
    GENERATORROUTES_PREFIX,
    VEHICLESROUTES_PREFIX,
};
