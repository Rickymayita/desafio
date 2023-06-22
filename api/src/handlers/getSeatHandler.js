const getSeat = require('../controllers/seatController')

const getSeatHandler = async (req, res) =>{
    const { id } = req.params;
    try {
        const newSeat = await getSeat(id)
        res.status(200).json(newSeat)
    } catch (error) {
        console.error('Vuelo no encontrado:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

module.exports = getSeatHandler