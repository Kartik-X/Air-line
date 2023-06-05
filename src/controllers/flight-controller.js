const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes"); //Insted of hardcoding the errors have used enums,Verbosity of the project increases

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const FlightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(FlightRequestData);
    res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      error: {},
      message: "Successfully created a Flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      //will embed code during exceptions
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      error: {},
      message: "Successfully fetched the Flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
