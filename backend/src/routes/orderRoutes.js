const express = require("express");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, placeOrder);

router.get("/my-orders", protect, getMyOrders);

router.put(
  "/status/:orderId",
  protect,
  authorizeRoles("restaurant_admin", "super_admin"),
  updateOrderStatus,
);
module.exports = router;
