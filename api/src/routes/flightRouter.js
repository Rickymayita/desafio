const { Router } = require('express')

const flightRouter = Router()

flightRouter.get('/seat/:id', (req, res)=>{
    res.status(200).send('NIY: ESTA RUTA TRAE LA INFORMACION DE LOS ASIENTOS');
})

flightRouter.get('/flights/:id/passengers', (req, res)=>{
    res.status(200).send('NIY: ESTA RUTA TRAE LA INFORMACION DE LOS PASAJEROS');
});

module.exports = flightRouter