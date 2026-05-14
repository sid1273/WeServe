const MenuItem = require("../models/MenuItem");

const createMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.create(req.body);

    res.Staus(201).json({
      message: "Menu item created",
      menuItem,
    });
  } catch (error) {
    res.Status(500).json({
      message: error.message,
    });
  }
};


const getRestaurantMenu = async (req, res) =>{
    try {
        const menu = await MenuItem.find({
            restaurant: req.param.restaurantId,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createMenuItem, getRestaurantMenu
}
