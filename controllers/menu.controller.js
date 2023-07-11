const Menu = require("../schemas/menuSchema");

const createMenu = async (req, res) => {
  const response = await Menu.create(req.body);
  // console.log(response);
  res.send(response);
};
const getMenu = async (req, res) => {
  const response = await Menu.find();
  // console.log(response);
  res.send(response);
};
const getMenuByCategory = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await Menu.find({ name });
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the data." });
  }
};

module.exports.menuController = { createMenu, getMenu, getMenuByCategory };
