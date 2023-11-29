const  mongoose = require ("mongoose")
const Recipient = require("./Recipients")

const recipientDataSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Recipient
    },
    name: {
        type:String
    },
    email:{
        type:String
    },
    walletAddress:{
        type: String
    }
    
})
module.exports = mongoose.model('RecipientData', recipientDataSchema)