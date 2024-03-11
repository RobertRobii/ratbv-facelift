export const busData = [
  {
    _id: 1,
    lineNumber: 1,
    route: "Triaj - Livada Postei",
    validFrom: new Date("2023-06-19"),
    stops: [
      {
        stop: "Triaj",
        schedule: [
          {
            day: "Luni - Vineri",
            departures: [
              { hour: 8, minutes: [15, 30, 45] },
              { hour: 9, minutes: [17, 22, 51] },
              { hour: 10, minutes: [5, 37, 49] },
              { hour: 11, minutes: [10, 26, 39] },
              // Alte plecări
            ],
          },
          {
            day: "Sambata - Duminica",
            departures: [
              { hour: 8, minutes: [10, 30, 50] },
              { hour: 9, minutes: [17, 29, 41] },
              { hour: 10, minutes: [3, 20, 38] },
              { hour: 11, minutes: [35, 49, 59] },
              // Alte plecări
            ],
          },
        ],
      },
      // Alte stații
    ],
  },
  {
    _id: 2,
    lineNumber: 2,
    route: "Rulemntul - Livada Postei",
    validFrom: new Date("2020-08-12"),
    stops: [
      {
        stop: "Rulemntul",
        schedule: [
          {
            day: "Luni - Vineri",
            departures: [
              { hour: 8, minutes: [7, 21, 34] },
              { hour: 9, minutes: [18, 26, 48] },
              { hour: 10, minutes: [4, 37, 50] },
              { hour: 11, minutes: [9, 19, 39] },
              // Alte plecări
            ],
          },
          {
            day: "Sambata - Duminica",
            departures: [
              { hour: 8, minutes: [10, 30, 50] },
              { hour: 9, minutes: [17, 29, 41] },
              { hour: 10, minutes: [3, 20, 38] },
              { hour: 11, minutes: [35, 49, 59] },
              // Alte plecări
            ],
          },
        ],
      },
      // Alte stații
    ],
  },
  {
    _id: 3,
    lineNumber: 3,
    route: "Valea Cetatii - Stadionul Tineretului",
    validFrom: new Date("2021-09-13"),
    stops: [
      {
        stop: "Rulemntul",
        schedule: [
          {
            day: "Luni - Vineri",
            departures: [
              { hour: 8, minutes: [7, 21, 34] },
              { hour: 9, minutes: [18, 26, 48] },
              { hour: 10, minutes: [4, 37, 50] },
              { hour: 11, minutes: [9, 19, 39] },
              // Alte plecări
            ],
          },
          {
            day: "Sambata - Duminica",
            departures: [
              { hour: 8, minutes: [10, 30, 50] },
              { hour: 9, minutes: [17, 29, 41] },
              { hour: 10, minutes: [3, 20, 38] },
              { hour: 11, minutes: [35, 49, 59] },
              // Alte plecări
            ],
          },
        ],
      },
      // Alte stații
    ],
  },
  // Alte linii de autobuz
];
