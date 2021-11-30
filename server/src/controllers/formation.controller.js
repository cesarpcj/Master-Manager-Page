const catchAsync = require('../utils/catchAsync');
const { formationService } = require('../services');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const getAllFormations = catchAsync(async(req,res) =>{
    const formations = await formationService.getAllFormation();
    res.send(formations);
})

module.exports = {getAllFormations};