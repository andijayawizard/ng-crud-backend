const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { expressjwt: expressJwt } = require('express-jwt');
const jwksRsa = require("jwks-rsa");
const checkJwt = expressJwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://js-simple-crud.jp.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://js-simple-crud.jp.auth0.com/api/v2/',
  issuer: `https://js-simple-crud.jp.auth0.com/`,
  algorithms: ['RS256']
});

// serve angular app with express
const path = __dirname + '/app/views-ng/';
app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
// app.use(bodyParser.json());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({
  extended: true
}));

const db = require("./app/models");

// for production
db.sequelize.sync();

// drop the table if it already exists / for development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  // res.json({ message: "Welcome to andijaya app" });
  res.sendFile(path + "index.html");
});

app.use(checkJwt);
require("./app/routes/siswa.routes")(app);
require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
