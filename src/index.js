const express = require('express');
const setupRoutes = require('./routes');
const { PORT } = require('./config/enviromental');
const { generateVehicles } = require('./utils/generator');


const app = express()
app.use(express.json())

setupRoutes(app)

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            const vehicles = generateVehicles(10)
            console.log(vehicles)
            console.log(`Server listening on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }

}

startServer()