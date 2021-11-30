const express = require('express');
const playerController = require('../../controllers/player.controller');
const auth = require('../../middlewares/auth');


express().use(auth);
const router = express.Router();
router
    .route("/all")
    .get(auth(), playerController.getAllPlayers);

router
    .route("/:playerId")
    .get(auth(), playerController.getPlayer);
    

module.exports = router;