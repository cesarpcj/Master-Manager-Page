const catchAsync = require('../utils/catchAsync');
const { teamService, playerService, formationService } = require('../services');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const mongoose = require("mongoose");


const getTeam = catchAsync(async (req,res)=>{
    const team = await teamService.getTeamById(req.params.teamId);
    if (!team) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Team not found');
    }
    res.send(team);
}
)

const getMyTeam = catchAsync(async(req,res)=>{
 
    const myTeam =  await teamService.getMyTeam(req.user._id);
    
    if (!myTeam) {
      throw new ApiError(httpStatus.NOT_FOUND, 'You dont have a team');
    }
    res.send(myTeam);
})

const createTeam = catchAsync(async(req,res)=>{
    const defaultFormation = await formationService.getFormationByName("442");
    const defaultObj = {
      givenName : defaultFormation.givenName,
      formationName : defaultFormation.formationName,
      positions : defaultFormation.positions,
      teamInstruction : [...defaultFormation.teamInstruction]
    }
    
    const teamBody = {
      name: req.body.name,
      manager: req.user._id,
      tactics : {
        a : defaultObj,
        b : defaultObj,
        c : defaultObj
      }
    };

    const team = await teamService.createTeam(teamBody);
    res.status(httpStatus.CREATED).send(team);
})

const updateTeamPlayers = catchAsync(async(req,res)=>{
    const playersObjectId = req.body.playersIds.map(playerId => mongoose.Types.ObjectId(playerId))
    playersObjectId.forEach(async(id, index) =>{
        const player = await playerService.UpdatePlayerById({_id:id}, {number : index+1});
    })
    const updatedTeam = await teamService.updateTeamPlayers(req.user._id, playersObjectId);
    res.status(httpStatus.OK).send(updatedTeam);
})
const updateTeamTactics = catchAsync(async(req,res)=>{
    
    const updatedTeam = await teamService.updateTeamTactics(req.user._id, req.body);
    res.status(httpStatus.OK).send(updatedTeam);
})

module.exports = {getTeam, createTeam, getMyTeam, updateTeamPlayers, updateTeamTactics};