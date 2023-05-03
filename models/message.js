const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    added: { type: String, required: true }
})

module.exports = mongoose.model("message", messageSchema);