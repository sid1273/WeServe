const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurantRoutes");


connectDB();
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Food Hub API Running !");
});
app.use("/api/restaurants", restaurantRoutes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});