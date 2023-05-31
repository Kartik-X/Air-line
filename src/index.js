const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const db = require("./models/index");
//const { City, Airport } = require("./models/index");

const SetUpAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`server ${PORT} is running`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }

    // const city = await City.findOne({
    //   where: {
    //     id: 17,
    //   },
    // });
    // const airports = await city.getAirports();
    // // const newAirport = await Airport.create({
    // //   name: "Jindal International Airport",
    // //   cityId: 17,
    // // });
  });
};
SetUpAndStartServer();
