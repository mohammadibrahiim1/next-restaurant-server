const CartItems = require("../schemas/cartSchema");

const addItemToCart = async (req, res) => {
  const { productId, quantity, name, price } = req.body;
  const id = "64acc42ae177fed72f771800";
  try {
    let cart = await CartItems.create({ id });
    if (cart) {
      let itemIndex = cart.products.findIndex(
        (product) => product.productId === productId
      );
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        cart.products.push({ productId, quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const newCart = await cart.create({
        id,
        products: [
          {
            productId,
            quantity,
            name,
            price,
          },
        ],
      });
      return res.status(201).send(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};
module.exports.addItemToCartController = {
  addItemToCart,
};
