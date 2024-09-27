const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Database connection successful"))
    .catch( (error) =>{
        console.log("Database connection issues");
        console.log(error);
        process.exit(1);
    });
};