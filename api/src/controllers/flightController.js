const sequelize = require("../db");

const getFlightData = async (flightId) => {
  try {
    const queryFlight = `
         SELECT *
         FROM flight
         WHERE flight_id = :flightId;
        `;
    const flight = await sequelize.query(queryFlight, {
      replacements: { flightId },
      type: sequelize.QueryTypes.SELECT,
    });

    const queryPassenger = `
    SELECT
    p.passenger_id AS passengerId,
    p.dni,
    p.name,
    p.age,
    p.country,
    bp.boarding_pass_id AS boardingPassId,
    bp.purchase_id AS purchaseId,
    bp.seat_type_id AS seatTypeId,
    bp.seat_id AS seatId
    FROM passenger p
    JOIN boarding_pass bp ON p.passenger_id = bp.passenger_id
    WHERE bp.flight_id = :flightId;
    `;
    const passengers = await sequelize.query(queryPassenger, {
      replacements: { flightId },
      type: sequelize.QueryTypes.SELECT,
    });

    const response = {
      flightId: flight[0].flight_id,
      takeoffDateTime: flight[0].takeoff_date_time,
      takeoffAirport: flight[0].takeoff_airport,
      landingDateTime: flight[0].landing_date_time,
      landingAirport: flight[0].landing_airport,
      airplaneId: flight[0].airplane_id,
      passengers: passengers,
    };
    
    return response;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    throw error;
  }
};

module.exports = getFlightData;
