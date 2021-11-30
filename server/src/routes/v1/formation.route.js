const express = require("express");
const formationController = require("../../controllers/formation.controller");
const auth = require('../../middlewares/auth');

express().use(auth);
const router = express.Router();

router
    .route("/all")
    .get(auth(), formationController.getAllFormations)

module.exports = router;