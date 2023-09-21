const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://rashi06mishra:gutru360degree@databasekakshi.cw1bmab.mongodb.net/";

const connectDatabase = async() => {
    try{
            await mongoose.connect(mongoDB, { useNewUrlParser: true });
            console.log('database connected successfully')
    } catch (error) {
            console.log('Erron while connecting to the database',error.message);
    }
}

module.exports = connectDatabase;

// try{
//         await mongoose.connect(mongoDB, { useNewUrlParser: true });
//         console.log('database connected successfully')
//     } catch (error) {
//         console.log('Erron while connecting to the database',error.message);
//     }

// mongoose.connect(mongoDB)
// .then (() => console.log("Connected to the server!!!"))
// .catch( err => console.log(`unable ${err.message}`) );