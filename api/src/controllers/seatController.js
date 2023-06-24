const sequelize = require("../db");

const getSeat = async (seatId) => {
  try {
    const querySeat = `
    SELECT * FROM seat
    WHERE seat_id = :seatId
  `;
    const seats = await sequelize.query(querySeat, {
      replacements: { seatId },
      type: sequelize.QueryTypes.SELECT,
    });
    return seats;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    throw error;
  }
};

const passengerWithGroup = (passengers) =>{
  const group = passengers.filter((passenger)=> passenger.seatId !== null)
  console.log(group);
}

module.exports = getSeat;
