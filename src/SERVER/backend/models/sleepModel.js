const mongoose = require("mongoose");

const sleepSchema = mongoose.Schema(
  {
    email: {
      type: String, 
      required: [true, "Add an email"], 
    },
    sleepHour: {
      type: Number,
      required: [true, "Add a sleep hour"],
    },
    sleepMinute: {
      type: Number,
      required: [true, "Add a sleep minute"],
    },
    bedHour: {
      type: Number,
      required: [true, "Add a bedtime hour"],
    },
    bedMinute: {
      type: Number,
      required: [true, "Add a bedtime minute"],
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

module.exports = mongoose.model("Sleep", sleepSchema);
