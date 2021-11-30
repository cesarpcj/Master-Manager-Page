const express = require('express');
const teamController = require('../../controllers/team.controller');
const auth = require('../../middlewares/auth');

express().use(auth);
const router = express.Router();

router
    .route("/create")
    .post(auth(), teamController.createTeam);

router
    .route("/myTeam")
    .get(auth(), teamController.getMyTeam)
    .patch(auth(), teamController.updateTeamPlayers);

router
    .route("/:teamId")
    .get(auth(), teamController.getTeam);
    
router
    .route("/update-tactics")
    .patch(auth(), teamController.updateTeamTactics);

module.exports = router;