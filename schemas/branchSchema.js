const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true, 
  },
  latitude: { 
    type: String,
    required: true,
  },
  longitude: { 
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true, 
  },
  zip_code: {
    type: String, 
    required: true, 
  },
  address: String,
  status: Number,    
});

const Branch = mongoose.model("Branch", branchSchema);       
module.exports = Branch;      
  