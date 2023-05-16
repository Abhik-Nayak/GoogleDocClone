const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

env.config();

// connect database
mongoose.connect("mongodb://localhost:27017/realtime_social_media", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log("connected");
}).catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
