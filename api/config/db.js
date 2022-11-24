const mongoose = require("mongoose");

const connectionMongo = new Promise((resolve, reject) => {
    mongoose.connect("mongodb+srv://marco:admin@cluster0.2mve6nw.mongodb.net/test")
        .then((data) => {
            console.log("mongo connected")
            resolve(data)
        })
        .catch(reject)
})

module.exports = connectionMongo
