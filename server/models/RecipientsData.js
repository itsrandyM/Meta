const  mongoose = require ("mongoose")
const Recipient = require("./Recipients")
const Token = require("./Token")
const Description = require("./Description")
const Classification = require("./Classification")



const recipientDataSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Recipient
    },
    name: {
        type:String
    },
    token:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Token
    },
    description:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Description
    },
    classification:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Classification
    },
    verified: {
        type: Boolean,
        default: false, 
      }
    
})
module.exports = mongoose.model('RecipientData', recipientDataSchema)