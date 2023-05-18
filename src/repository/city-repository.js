const { City } = require("../models/index"); //Right place to interact with the models = REPOSITORY

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      ///to catch database errors i.e., to delete entries which do not exist
      throw { error };
    }
  }
}

module.exports = CityRepository;
