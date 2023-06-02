const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { comapareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!comapareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival Time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log(error);
      console.log("Something went wrong at Service layerf");
      throw { error };
    }
  }
  async getFlightData() {
    //todo
  }
}
module.exports = FlightService;
