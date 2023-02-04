const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    email: {
      type: String, 
      required: [true, "Add an email"], 
    },
    name: {
      type: String,
      required: [true, "Add an exercise name"],
    },
    sets: {
      type: Number,
      required: [true, "Add a set number"],
    },
    repititions: {
      type: Number,
      required: [true, "Add a repitition number"],
    },
    weight: {
      type: Number,
      required: [true, "Add a weight number"],
    },
    dateAdded: {
      type: Date,
      required: [true, "Add a date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
