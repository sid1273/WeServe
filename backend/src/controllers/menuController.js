const MenuItem = require("../models/MenuItem");

const createMenuItem = async (req, res) => {
  try {
    const { name, restaurant } = req.body;

    const existingItem = await MenuItem.findOne({ name, restaurant });

    if (existingItem) {
      return res.status(400).json({
        message: "Menu Item already exists",
      });
    }
    const menuItem = await MenuItem.create(req.body);

    res.status(201).json({
      message: "Menu item created",
      menuItem,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getRestaurantMenu = async (req, res) => {
  try {
    const menu = await MenuItem.find({
      restaurant: req.params.restaurantId,
    });

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMenuItem,
  getRestaurantMenu,
};
