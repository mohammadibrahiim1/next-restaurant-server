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
  const { slug } = req.query;
  try {
    const response = await Menu.find({ slug });
    console.log(response);
    res.status(200).send({
      status: "success",
      results: response.length,
      response,
    });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the data.", error });
  }
};

module.exports.menuController = { createMenu, getMenu, getMenuByCategory };
