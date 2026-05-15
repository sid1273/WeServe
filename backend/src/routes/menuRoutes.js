const express = require("express");
const router = express.Router();

const {
  createMenuItem,
  getRestaurantMenu,
} = require("../controllers/menuController");

const { protect } = require("../middleware/authMiddleware");

const { authorizeRoles } = require("../middleware/roleMiddleware");

router.post("/", protect, authorizeRoles("restaurant_admin", "super_admin"),
createMenuItem
);

router.get ("/:restaurantId", getRestaurantMenu);

module.exports = router;