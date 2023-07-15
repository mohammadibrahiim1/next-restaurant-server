const OfferItems = require("../schemas/offerSchema");

const createOfferItems = async (req, res) => {
  const response = await OfferItems.create(req.body);
  //   console.log(response);
  res.send(response);
};
const getOfferItems = async (req, res) => {
  const response = await OfferItems.find();
  //   console.log(response);
  res.send(response);
};
const getOfferByCategory = async (req, res) => {
  const { slug } = req.query;
  try {
    const response = await OfferItems.find({ slug });
    console.log(response);
    res.send(response);
    // res.status(200).send({
    //   status: "success",
    //   results: response.length,
    //   response,
    // });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the data.", error });
  }
};

module.exports.offerItemsController = {
  createOfferItems,
  getOfferItems,
  getOfferByCategory,
};
