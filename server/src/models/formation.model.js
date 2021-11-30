const mongoose = require('mongoose');

const formationSchema = mongoose.Schema({
    formationName : {
        type : String  
    },

    owner : { 
        type : mongoose.Types.ObjectId
    },

    givenName : {
        type : String
    },

    positions : [
        {type: Object}
    ],

    teamInstruction:[
        {type: Object}
    ]
})

const Formation = mongoose.model("Formation", formationSchema)

module.exports = Formation;