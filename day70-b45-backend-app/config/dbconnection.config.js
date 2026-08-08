const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.mongo_uri);
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = dbConnection;