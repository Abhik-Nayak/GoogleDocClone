import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import RegisterModel from './models/Register.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: ["https://deploy-mern-frontend.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  RegisterModel.findOne({ email })
    .then(user => {
      if (user) {
        res.json("Already have an account");
      } else {
        RegisterModel.create({ name, email, password })
          .then(result => res.json(result))
          .catch(err => res.json(err));
      }
    }).catch(err => res.json(err));
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is Running");
});
