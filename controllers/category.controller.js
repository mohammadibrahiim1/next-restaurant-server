const Category = require("../schemas/categorySchema");

const createCategory = async (req, res) => {
  const response = await Category.create(req.body);
  // console.log(response);
  res.send(response);
};

const getCategories = async (req, res) => {
  const response = await Category.find();
  // console.log(response);
  res.send(response);
};

const updateCategory = async (req, res) => {
  const response = await Category.updateMany(
    {},
    // {
    //   _id: req.params.id,
    // },
    {
      $set: {
        description: `purchase now`,
      },
    },
    {
      new: true,
    }
  );
  // console.log(response);
  res.send(response);
};
module.exports.categoryController = {
  createCategory,
  getCategories,
  updateCategory,
};
