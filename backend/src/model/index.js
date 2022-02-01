const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
  pharseTitle: {
    type: String,
    required: true,
  },
  pharseValue: {
    type: String,
    required: true,
  },
});

const mainModel = new mongoose.model("mainschema", mainSchema);

module.exports = mainModel;
