import mongoose from "mongoose";

const DepartureSchema = new mongoose.Schema({
  hour: {
    type: Number,
    required: true,
  },
  minutes: {
    type: [Number],
    required: true,
  },
});

const ScheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  departures: [DepartureSchema],
});

const BusScheduleSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  validFrom: {
    type: Date,
    required: true,
  },
  schedule: [ScheduleSchema],
  stop: String,
});

const BusSchedule =
  mongoose.models.BusSchedule ||
  mongoose.model("BusSchedule", BusScheduleSchema);

module.exports = BusSchedule;
