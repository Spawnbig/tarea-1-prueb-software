const carRepository = require('../repository/CarRepository');

const getCars = async (req, res) => {
    const result = await carRepository.getCars();
    res.json(result);
};

module.exports = {
    getCars
};
