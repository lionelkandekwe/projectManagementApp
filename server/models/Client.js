const mongoose = require("mongoose")

//CREATE MONGOOSE SCHEMA

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
})

//Export as mongoose model
module.exports = mongoose.model("Client", ClientSchema)
