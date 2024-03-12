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
              { hour: 5, minutes: [20, 35, 55] },
              { hour: 6, minutes: [10, 20, 29, 38, 47, 56] },
              { hour: 7, minutes: [5, 14, 23, 32, 41, 50, 59] },
              { hour: 8, minutes: [8, 17, 26, 35, 45] },
              { hour: 9, minutes: [2, 19, 35, 45] },
              { hour: 10, minutes: [9, 25, 42, 59] },
              { hour: 11, minutes: [15, 32, 49] },
              { hour: 12, minutes: [5, 22, 31, 40, 49, 58] },
              { hour: 13, minutes: [7, 16, 25, 34, 43, 52] },
              { hour: 14, minutes: [1, 10, 19, 28, 37, 46, 55] },
              { hour: 15, minutes: [4, 13, 22, 31, 40, 49, 58] },
              { hour: 16, minutes: [7, 16, 25, 34, 43, 52] },
              { hour: 17, minutes: [1, 10, 19, 28, 37, 45] },
              { hour: 18, minutes: [3, 20, 40, 57] },
              { hour: 19, minutes: [14, 30, 47] },
              { hour: 20, minutes: [4, 20, 37, 54] },
              { hour: 21, minutes: [19, 44] },
              { hour: 22, minutes: [9, 34, 59] },
              { hour: 23, minutes: [24] },
              // Alte plecări
            ],
          },
          {
            day: "Sambata - Duminica",
            departures: [
              { hour: 5, minutes: [] },
              { hour: 6, minutes: [30, 47] },
              { hour: 7, minutes: [3, 20, 37, 53] },
              { hour: 8, minutes: [10, 27, 43] },
              { hour: 9, minutes: [0, 17, 33, 55] },
              { hour: 10, minutes: [12, 28, 45] },
              { hour: 11, minutes: [2, 18, 35, 52] },
              { hour: 12, minutes: [8, 25, 42, 58] },
              { hour: 13, minutes: [15, 32, 48] },
              { hour: 14, minutes: [5, 22, 38, 55] },
              { hour: 15, minutes: [12, 28, 45] },
              { hour: 16, minutes: [2, 18, 35, 52] },
              { hour: 17, minutes: [8, 25, 42] },
              { hour: 18, minutes: [5, 20, 45] },
              { hour: 19, minutes: [10, 42] },
              { hour: 20, minutes: [0, 25, 50] },
              { hour: 21, minutes: [15, 40] },
              { hour: 22, minutes: [5, 30] },
              { hour: 23, minutes: [] },
              // Alte plecări
            ],
          },
        ],
      },
      {
        stop: "RAT Brasov",
        schedule: [
          {
            day: "Luni - Vineri",
            departures: [
              { hour: 5, minutes: [20, 35, 55] },
              { hour: 6, minutes: [10, 20, 29, 38, 47, 56] },
              { hour: 7, minutes: [5, 14, 23, 32, 41, 50, 59] },
              { hour: 8, minutes: [8, 17, 26, 35, 45] },
              { hour: 9, minutes: [2, 19, 35, 45] },
              { hour: 10, minutes: [9, 25, 42, 59] },
              { hour: 11, minutes: [15, 32, 49] },
              { hour: 12, minutes: [5, 22, 31, 40, 49, 58] },
              { hour: 13, minutes: [7, 16, 25, 34, 43, 52] },
              { hour: 14, minutes: [1, 10, 19, 28, 37, 46, 55] },
              { hour: 15, minutes: [4, 13, 22, 31, 40, 49, 58] },
              { hour: 16, minutes: [7, 16, 25, 34, 43, 52] },
              { hour: 17, minutes: [1, 10, 19, 28, 37, 45] },
              { hour: 18, minutes: [3, 20, 40, 57] },
              { hour: 19, minutes: [14, 30, 47] },
              { hour: 20, minutes: [4, 20, 37, 54] },
              { hour: 21, minutes: [19, 44] },
              { hour: 22, minutes: [9, 34, 59] },
              { hour: 23, minutes: [24] },
              // Alte plecări
            ],
          },
          {
            day: "Sambata - Duminica",
            departures: [
              { hour: 5, minutes: [] },
              { hour: 6, minutes: [30, 47] },
              { hour: 7, minutes: [3, 20, 37, 53] },
              { hour: 8, minutes: [10, 27, 43] },
              { hour: 9, minutes: [0, 17, 33, 55] },
              { hour: 10, minutes: [12, 28, 45] },
              { hour: 11, minutes: [2, 18, 35, 52] },
              { hour: 12, minutes: [8, 25, 42, 58] },
              { hour: 13, minutes: [15, 32, 48] },
              { hour: 14, minutes: [5, 22, 38, 55] },
              { hour: 15, minutes: [12, 28, 45] },
              { hour: 16, minutes: [2, 18, 35, 52] },
              { hour: 17, minutes: [8, 25, 42] },
              { hour: 18, minutes: [5, 20, 45] },
              { hour: 19, minutes: [10, 42] },
              { hour: 20, minutes: [0, 25, 50] },
              { hour: 21, minutes: [15, 40] },
              { hour: 22, minutes: [5, 30] },
              { hour: 23, minutes: [] },
              // Alte plecări
            ],
          },
        ],
      },
      {
        stop: "Autogara 3",
      },
      {
        stop: "Vlahuta",
      },
      {
        stop: "IUS",
      },
      {
        stop: "CEC",
      },
      {
        stop: "Liceul Mesota",
      },
      {
        stop: "Camera de Comert",
      },
      {
        stop: "Sanitas",
      },
      {
        stop: "Primarie",
      },
      {
        stop: "Livada Postei",
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
        stop: "Valea Cetatii",
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
