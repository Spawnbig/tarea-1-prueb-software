const defaultRoutes = require('./default')
const generatorRoutes = require('./generator.routes')
const { generatorRoutePrefix } = require('../utils/constants')

function setupRoutes(app) {
    app.use('/', defaultRoutes)
    app.use(generatorRoutePrefix, generatorRoutes)
}

module.exports = setupRoutes
