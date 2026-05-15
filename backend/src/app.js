require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurantRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
  res.send("Food Hub API Running !");
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
