const { Team } = require('../models');
const ApiError = require('../utils/ApiError');

const getTeamById = async (id)=>{
    return Team.findById(id)
}
const getMyTeam = async (userId)=>{
    
    const team = await Team.findOne({manager : userId}).populate('players');
    return team;
}

const updateTeamPlayers = async(userId, playersId)=>{
    const updatedTeam = await Team.findOneAndUpdate({manager : userId}, {players : playersId});
    return updatedTeam;
}
const updateTeamTactics= async(userId, data)=>{
    let update = {};
    
    switch (data.tacticName) {
        case "a":
            update = {'tactics.a' : data.formation}
            break;
        case "b":
            update = {'tactics.b' : data.formation}
            break;
        case "c":
            update = {'tactics.c' : data.formation}
            break;
    
        default:
            throw new ApiError(httpStatus.NOT_FOUND, "Something wrong");
            
    }
    
    
    const updatedTeam = await Team.findOneAndUpdate({manager : userId}, {$set : update });
    return updatedTeam;
}

const createTeam = async (teamBody)=>{
    return Team.create(teamBody);
}

module.exports = {getTeamById, createTeam, getMyTeam, updateTeamPlayers, updateTeamTactics};