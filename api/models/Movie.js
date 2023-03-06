const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
  },
  imgTitle: {
    type: String,
  },
  imgSm: {
    type: String,
  },
  trailer: {
    type: String,
  },
  video: {
    type: String,
  },
  year: {
    type: String,
  },
  limit: {
    type: genre,
  },
  genre: {
    type: String,
  },
  isSeries: {
    type: Boolean,
    default: false,
  },
});

//converting the schema into model to use it for creating documents and then exporting it

module.exports = mongoose.model("movieModel", movieSchema);
