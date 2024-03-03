import mongoose from "mongoose";

const departureSchema = new mongoose.Schema({
  stop: {
    type: String,
    required: true,
  },
  time: [
    {
      hour: {
        type: String,
        required: true,
      },
      minute: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
});

const scheduleSchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    required: true,
  },
  departures: [departureSchema],
});

const mainSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  validFrom: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  schedule: [scheduleSchema],
});

const Line = mongoose.model("Line", mainSchema);

module.exports = Line;
