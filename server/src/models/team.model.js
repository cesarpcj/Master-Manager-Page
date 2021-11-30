const { internet } = require('faker');
const { string, number } = require('joi');
const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    
    
    name :{
        type : String,
        required : true
    },

    manager : {
        type : mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required:true
    },

    players : [
        {type: mongoose.SchemaTypes.ObjectId, ref: 'Player'}
    ],

    finances :{
        money: {
            type: Number,
            required:true,
            default: 100,
        }
    },

    tactics : {
        a : {
            formationName : {
                type : String,
                
            },

            givenName : {
                type : String,
                
            },

            positions : [
               { type: Object}
            ],

            teamInstruction:[
                {type: Object},
            ]

        },
        b : {
            formationName : {
                type : String,
                
            },

            givenName : {
                type : String,
                
            },

            positions : [
               { type: Object}
            ],

            teamInstruction:[
                {type: Object},
            ]
        },
        c : {
            formationName : {
                type : String,
                
            },

            givenName : {
                type : String,
                
            },

            positions : [
               { type: Object}
            ],

            teamInstruction:[
                {type: Object},
            ]
        }
    }
    
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;