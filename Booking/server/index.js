import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

env.config();

// connect database
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     family: 4,
// }).then(() => {
//     console.log("connected");
// }).catch(err => console.log(err));



// mongodb connection 
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${encodeURIComponent(process.env.MONGO_DB_PASSWORD)}@cluster0.8iiqxqw.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    // `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8iiqxqw.mongodb.net/${process.env.MONGO_DB_DATBASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() =>{
    console.log("Database connected");
})

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})
// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// const authRoutes = require("./routes/auth");
import authRoutes from "./routes/auth.js";
app.use("/api/auth",authRoutes);

// const hotelRoutes = require("./routes/hotels");
import hotelRoutes from "./routes/hotels.js";
app.use("/api/hotel",hotelRoutes);

app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})