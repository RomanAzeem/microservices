const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/books";

const connectDB = async() =>{
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);
        
    }

}
module.exports = connectDB;
