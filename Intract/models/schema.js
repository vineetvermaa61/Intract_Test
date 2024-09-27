
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    target :{
        type: String,
        required: true,
    },
    userId :{
        type: Number,
        required: true,
    },
    message :{
        type: String,
        required: true,
    },
    source :{
        type: String,
    },
    timestamp :{
        type: Date,
        default: Date.now,
    },
});

const File = mongoose.model("File", fileSchema);
module.exports = File;