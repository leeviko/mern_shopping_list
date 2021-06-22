const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
const connectDB = require("./config/db");

const items = require("./routes/api/items");

const app = express();

// Bodyparser middleware (=väliohjemisto)
app.use(express.json()); 

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api/items", items);

// Serve static assets if in prod
if(process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })  
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
