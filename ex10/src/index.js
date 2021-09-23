function myFunction() {
  var myMusic = {
    011: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      id: 2,
      artist: "Test",
      title: "Test ttile",
      release_year: 1976,
      formats: {
        1: "TT",
        2: "AA",
        3: "LL",
      },
      gold: false,
    },
  };
}

myFunction()[2];
module.exports = myFunction;
