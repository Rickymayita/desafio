const sequelize = require('../db');

const getSeat = async (seatId) =>{
    try {
        const querySeat = `
    SELECT * FROM seat
    WHERE seat_id = :seatId
  `;
  const seats = await sequelize.query(querySeat, {
    replacements: { seatId },
    type: sequelize.QueryTypes.SELECT
  });
          console.log('hola');
          console.log(seats);
          return seats     
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
}

module.exports = getSeat