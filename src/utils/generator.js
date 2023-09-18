const { BRANDS, COLORS, VEHICLE_TYPE, priceFormatter } = require("./constants");

const generateVehicles = (numberOfVehicles) => {
    const vehicles = [];
    for (let i = 0; i < numberOfVehicles; i++) {
        vehicles.push({
            brand: getRandomFromArray(BRANDS),
            year: getRandomNumberBetween(2015,2018),
            color: getRandomFromArray(COLORS),
            price: priceFormatter.format(getRandomNumberBetween(8000000, 30000000)),
            turbo: getRandomFromArray([true,false]),
            ...processObject(getRandomFromArray(VEHICLE_TYPE)),
        })
    }
    return vehicles;
}

const getRandomFromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const processObject = (object) => {
    const result = {};
    for (let key in object) {
        if (Array.isArray(object[key])) {
            result[key] = getRandomFromArray(object[key]);
        } else {
            result[key] = object[key];
        }
    }
    return result;
}

module.exports = {
    generateVehicles
}