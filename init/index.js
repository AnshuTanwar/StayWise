const mongoose = require("mongoose"); 
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/staywise";

main()
    .then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log(err);  
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6793d457f6186df51f942267"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();