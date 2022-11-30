const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender: {
        type: String
    },
    reciever: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
})

module.exports = User = mongoose.model("user", MessageSchema)