const { Router } = require('express')
const getSeatHandler = require('../handlers/getSeatHandler')
const getFlightHandler = require('../handlers/getFlightHandler')

const flightRouter = Router()

flightRouter.get('/seat/:id', getSeatHandler)

flightRouter.get('/flights/:id/passengers', getFlightHandler);

module.exports = flightRouter