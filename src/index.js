const express = require('express');
const setupRoutes = require('./routes');
const { PORT } = require('./config/enviromental');


const app = express()
app.use(express.json())

setupRoutes(app)

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }

}

startServer()