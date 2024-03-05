import { connectToDB } from "./db.js";
// import BusSchedule from "../models/BusSchedule.js";

const initializeDB = async () => {
  await connectToDB();
  console.log("ready to push data to db");

  // Datele despre liniile de autobuz, stațiile și orarele
  // const busData = [
  //   {
  //     _id: 1,
  //     lineNumber: 1,
  //     route: "Triaj - Livada Postei",
  //     validFrom: new Date(),
  //     stops: [
  //       {
  //         stop: "Triaj",
  //         schedule: [
  //           {
  //             day: "Luni - Vineri",
  //             departures: [
  //               { hour: 8, minutes: [15, 30, 45] },
  //               { hour: 9, minutes: [17, 22, 51] },
  //               { hour: 10, minutes: [5, 37, 49] },
  //               { hour: 11, minutes: [10, 26, 39] },
  //               // Alte plecări
  //             ],
  //           },
  //           {
  //             day: "Sambata - Duminica",
  //             departures: [
  //               { hour: 8, minutes: [10, 30, 50] },
  //               { hour: 9, minutes: [17, 29, 41] },
  //               { hour: 10, minutes: [3, 20, 38] },
  //               { hour: 11, minutes: [35, 49, 59] },
  //               // Alte plecări
  //             ],
  //           },
  //         ],
  //       },
  //       // Alte stații
  //     ],
  //   },
  //   // Alte linii de autobuz
  // ];

  // // Introduceți datele în baza de date
  // for (const bus of busData) {
  //   try {
  //     const createdBus = await BusSchedule.create(bus);
  //     console.log("Created bus schedule for line:", createdBus._id);
  //   } catch (error) {
  //     console.error("Error creating bus schedule for line:", bus._id, error);
  //   }
  // }

  // console.log("Baza de date a fost inițializată cu succes!");
};

initializeDB();
