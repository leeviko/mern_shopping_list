const mongoose = require("mongoose");
const db = require("./keys").mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    console.log("MongoDB is connected...");
  } catch(err) {
    console.log(err);
  }

}

module.exports = connectDB;
