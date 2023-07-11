const PopularItems = require("../schemas/popularItems");

const createPopularItems = async (req, res) => {
  const response = await PopularItems.create(req.body);
  //   console.log(response);
  res.send(response);
};
const getPopularItems = async (req, res) => {
  const response = await PopularItems.find();
  console.log(response);
  res.send(response);
};
// const getMenuByCategory = async (req, res) => {
//   const { slug } = req.query;
//   try {
//     const response = await Menu.find({ slug });
//     console.log(response);
//     res.send(response );
//     // res.status(200).send({
//     //   status: "success",
//     //   results: response.length,
//     //   response,
//     // });
//   } catch (error) {
//     res
//       .status(500)
//       .send({ error: "An error occurred while fetching the data.", error });
//   }
// };

module.exports.popularItemsController = {
  createPopularItems,
  getPopularItems,
  //  getMenu, getMenuByCategory
};
