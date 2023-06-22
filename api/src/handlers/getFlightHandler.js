const getFlightData = require("../controllers/flightController");

const getFlightHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const newSeatingOrder = await getFlightData(id);
    if (!newSeatingOrder || newSeatingOrder.length === 0) {
      res.status(404).json({ code: 404, data: {} });
    }
    res.status(200).json({ code: 200, data: { ...newSeatingOrder } });
  } catch (error) {
    console.error("vuelo no en contrado", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getFlightHandler;
