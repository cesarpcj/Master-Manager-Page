const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Player, User }= require('../models');

const GetAllPlayers = async () =>{
    return  Player.find();   
}
const GetPlayerById = async (id) =>{
    const player = await Player.findById(id);
    if(!player){
        throw new ApiError(httpStatus.NOT_FOUND, "Player not find");
    }

    return User;
}
const UpdatePlayerById = async (id, newData) =>{
    const player = await Player.findOneAndUpdate(id, newData);
    if(!player){
        throw new ApiError(httpStatus.NOT_FOUND, "Player not find");
    }

    return User;
}

module.exports = {GetAllPlayers, GetPlayerById, UpdatePlayerById};