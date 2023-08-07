const Branch = require("../schemas/branchSchema");

const createBranch = async (req, res) => {
  const response = await Branch.create(req.body);
  console.log(response);
  res.send(response);
};

const getBranches = async (req, res) => {
  const response = await Branch.find();
  // console.log(response);
  res.send(response);
};

// const updateCategory = async (req, res) => {
//   const response = await Category.updateMany(
//     {},
//     // {
//     //   _id: req.params.id,
//     // },
//     {
//       $set: {
//         description: `purchase now`,
//       },
//     },
//     {
//       new: true,
//     }
//   );
//   // console.log(response);
//   res.send(response);
// };
module.exports.branchController = {
  createBranch,
  getBranches,
  //   updateCategory,
};
