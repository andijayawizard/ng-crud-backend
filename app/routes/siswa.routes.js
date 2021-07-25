module.exports = app => {
  const siswa = require("../controllers/siswa.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", siswa.create);

  // Retrieve all Tutorials
  router.get("/", siswa.findAll);

  // Retrieve all published Tutorials
  router.get("/published", siswa.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", siswa.findOne);

  // Update a Tutorial with id
  router.put("/:id", siswa.update);

  // Delete a Tutorial with id
  router.delete("/:id", siswa.delete);

  // Delete all Tutorials
  router.delete("/", siswa.deleteAll);

  app.use('/api/siswa', router);
};
