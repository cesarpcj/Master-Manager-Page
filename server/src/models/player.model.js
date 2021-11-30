const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    
    nome: {
        type: String,
        required : true
    },
    number: {
        type: String,
        required : true
    },
    idade: {
        type: Number,
        required : true
    },
    valor: {
        type: Number,
        required : true
    },
    salario:{
        type: Number,
        required : true
    },
    team: {
        type: String,
        required : true
    },
    knownPositions: {
        type: String,
        required : true
    },
    attributes : {
        type: Object,
        required: true
    }
})

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;