const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");

const placeOrder =async (req, res) =>{
    try {
        const{
            restaurant,
            items
        } = req.body;

        let totalPrice = 0;

        for(const item of items){
            const menuItem = await MenuItem.findById(
                item.menuItem
            );

            if(!menuItem){
                return res.status(404).json({
                    message: "Menu item not found",
                });
            }

            totalPrice+= menuItem.price * item.quantity;
        }


        const order = await Order.create({
            customer : req.user.id,
            restaurant,
            items,
            totalPrice,
        });

        res.status(201).json({
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({
      customer: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const updateOrderStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const order = await Order.findById(
      req.params.orderId
    );

    if (!order) {

      return res.status(404).json({
        message: "Order not found",
      });

    }

    order.status = status;

    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports={
    placeOrder,getMyOrders,updateOrderStatus
};