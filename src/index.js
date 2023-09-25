const express = require('express');
const setupRoutes = require('./routes');
const { PORT } = require('./config/env_settings');
const { PrismaClient } = require('@prisma/client');
const errorHandlerMiddleware = require('./middlewares/error_handler');

const prisma = new PrismaClient();
const isReset = process.argv[2] === 'reset';

const app = express();

app.use(express.json());
setupRoutes(app);
app.use(errorHandlerMiddleware);

/**
 * Resets the 'car' table in the database by deleting all records.
 * 
 * @returns {Promise<void>} A promise that resolves when the reset process is finished.
 */
const reset = async () => {
    console.log(`Reset is set. Start reseting ...`);
    await prisma.vehicles.deleteMany();
    console.log(`Reset finished.`);
};

/**
 * Starts a server using the Express framework.
 * The server listens on the specified port and logs a message when it starts.
 * @returns {void}
 */
const startServer = async () => {
    try {
        if (isReset) {
            await reset();
        }
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

startServer();
