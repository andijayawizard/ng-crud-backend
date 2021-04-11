module.exports = {
  HOST: "localhost",
  USER: "bezkoder",
  PASSWORD: "bezkoder",
  DB: "bezkoder",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
