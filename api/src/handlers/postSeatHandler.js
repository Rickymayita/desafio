const postgetSeatHandler = (req, res) =>{
    const { seatColumn, seatRow} = req.body;
    res.status(200).json(`NIY: ESTA RUTA TRAE LA INFORMACION DEL ASIENTOS ${seatColumn} y ${seatRow}`);
}

module.exports = postgetSeatHandler