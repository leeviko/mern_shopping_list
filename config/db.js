const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@shoppinglist.rey54.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    )
    console.log("MongoDB is connected...");
  } catch(err) {
    console.log(err);
  }

}

module.exports = connectDB;
