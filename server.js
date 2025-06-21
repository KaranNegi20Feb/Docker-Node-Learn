const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const userRoutes = require("./routes/index");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use("/api/users", userRoutes);

// Mongo Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error:", err));

app.get("/", (req, res) => res.send("Server is up "));

app.listen(port, () => console.log(`Server running on port ${port}`));
