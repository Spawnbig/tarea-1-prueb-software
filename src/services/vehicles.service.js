const { getVehiclesFromQuery } = require('../repository/CarRepository');

const filterVehicles = async (price, type, color) => {
    const query = buildQuery(price, type, color);
    return await getVehiclesFromQuery(query);
}

const buildQuery = (price, type, color) => {
    let query = {};
    if (price) {
        query.price = {
            lt: parseInt(price),
        };
    }
    if (type) {
        query.type = type;
    }
    if (color) {
        query.color = color;
    }
    return query;
}

module.exports = {
    filterVehicles
}