const defaultRoutes = require('./default')

function setupRoutes(app) {
    app.use('/', defaultRoutes)
}

module.exports = setupRoutes
