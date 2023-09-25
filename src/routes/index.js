const generatorRoutes = require('./generator.routes');
const vehiclesRoutes = require('./vehicles.routes');
const {
    GENERATORROUTES_PREFIX,
    VEHICLESROUTES_PREFIX,
} = require('../utils/constants');

/**
 * Sets up all the routes for the application.
 *
 * @param {object} app - The Express application instance.
 * @returns {void}
 */
function setupRoutes(app) {
    app.use(GENERATORROUTES_PREFIX, generatorRoutes);
    app.use(VEHICLESROUTES_PREFIX, vehiclesRoutes);
}

module.exports = setupRoutes;
