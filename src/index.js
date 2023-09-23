const express = require('express');
const setupRoutes = require('./routes');
const { PORT } = require('./config/enviromental');
const { PrismaClient } = require('@prisma/client');
const errorHandlerMiddleware = require('./middlewares/error_handler');

const prisma = new PrismaClient();
// TODO: Validate the input
const isReset = process.argv[2] === 'reset';

const app = express();

app.use(express.json());
setupRoutes(app);
app.use(errorHandlerMiddleware)

const reset = async () => {
    console.log(`Start reseting ...`);
    await prisma.car.deleteMany();
    console.log(`Reset finished.`);
};

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
