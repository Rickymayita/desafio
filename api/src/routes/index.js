const { Router } = require('express')
const flightRouter = require("../routes/flightRouter")

const mainRouter = Router();

mainRouter.use('/', flightRouter);

module.exports = mainRouter;