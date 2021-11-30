const httpStatus = require('http-status');
const { Formation } = require('../models');
const ApiError = require('../utils/ApiError');

const getFormationByName = async (givenName)=>{
    const formation = await Formation.findOne({givenName});
    if(!formation){
        throw new ApiError(httpStatus.NOT_FOUND, "Fomation not found");
    }
    return formation;
}

const getAllFormation = async ()=>{
    const formations = await Formation.find();
    if(!formations){
        throw new ApiError(httpStatus.NOT_FOUND, "Fomation not found");
    }
    return formations;
}

module.exports = {getFormationByName,  getAllFormation};