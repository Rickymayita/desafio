const { Router } = require('express')
const postSeatHandler = require('../handlers/postSeatHandler')
const getFlightHandler = require('../handlers/getFlightHandler')

const flightRouter = Router()

flightRouter.post('/seat', postSeatHandler)

flightRouter.get('/flights/:id/passengers', getFlightHandler);

module.exports = flightRouter