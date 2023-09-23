const generatorRoutes = require('./generator.routes')
const vehiclesRoutes = require('./vehicles.routes')
const { GENERATORROUTES_PREFIX, VEHICLESROUTES_PREFIX } = require('../utils/constants')

function setupRoutes(app) {
    app.use(GENERATORROUTES_PREFIX, generatorRoutes)
    app.use(VEHICLESROUTES_PREFIX, vehiclesRoutes)
}

module.exports = setupRoutes
