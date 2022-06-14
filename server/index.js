const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const connection = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, 
  useUnifiedTopology: "true" })
const PORT = process.env.PORT || 3001;

const app = express();



//app.use(cors());
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server" });
  });



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
