const express = require("express");

const router = express.Router();

const {
  createRestaurant,
  getRestaurants,
} = require("../controllers/restaurantController");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  authorizeRoles,
} = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorizeRoles("restaurant_admin", "super_admin"),
  createRestaurant
);

router.get("/", getRestaurants);

module.exports = router;