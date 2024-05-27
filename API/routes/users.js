const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");
const { verifyTokenAndAuthorization } = require("./verifyToken");

// Get user details and orders
router.get(
  "/dashboard/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    try {
      const user = await User.findById(req.params.userId).select("-password"); // Exclude password
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json({ user, orders });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
