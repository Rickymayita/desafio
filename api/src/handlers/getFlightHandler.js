const getFlightHandler = (req, res) =>{
    const { id } = req.params;
    res.status(200).send(`NIY: ESTA RUTA TRAE LA INFORMACION DE LOS PASAJEROS DEL FLIGHT ${id}`);
}

module.exports = getFlightHandler