const { playerService} = require('../services');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getPlayer = catchAsync(async (req,res)=>{
    const player =  await playerService.GetPlayerById(req.params.playerId);
    res.send(player);
})
const getAllPlayers = catchAsync(async (req,res)=>{
    const allPlayers =  await playerService.GetAllPlayers();
    res.send(allPlayers);
})

module.exports = {getAllPlayers, getPlayer};

