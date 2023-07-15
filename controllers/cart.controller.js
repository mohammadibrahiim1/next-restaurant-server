const CartProduct = require("../schemas/cartSchema");

const addToCart = async (req, res) => {
  const response = await CartProduct.create(req.body);
  // console.log(response);
  res.send(response);
};

module.exports.cartController = {
  addToCart,
};
