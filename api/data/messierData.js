const messier_objects = {
  "M1": {
    "name": "Crab Nebula",
    "type": "Supernova remnant",
    "constellation": "Taurus",
    "magnitude": 8.4,
    "ascension": 83.63308333333333,
    "declination": 22.0145
  },
  "M2": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Aquarius",
    "magnitude": 6.3,
    "ascension": 323.36258333333336,
    "declination": -0.82325
  },
  "M3": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Canes Venatici",
    "magnitude": 6.2,
    "ascension": 205.54841666666664,
    "declination": 28.377277777777778
  },
  "M4": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Scorpius",
    "magnitude": 5.9,
    "ascension": 245.89675000000003,
    "declination": -26.52575
  },
  "M5": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Serpens",
    "magnitude": 6.7,
    "ascension": 229.63841666666667,
    "declination": 2.081027777777778
  },
  "M6": {
    "name": "Butterfly Cluster",
    "type": "Open cluster",
    "constellation": "Scorpius",
    "magnitude": 4.2,
    "ascension": 265.025,
    "declination": -32.21666666666667
  },
  "M7": {
    "name": "Ptolemy Cluster",
    "type": "Open cluster",
    "constellation": "Scorpius",
    "magnitude": 3.3,
    "ascension": 268.46333333333337,
    "declination": -34.79277777777778
  },
  "M8": {
    "name": "Lagoon Nebula",
    "type": "Nebula",
    "constellation": "Sagittarius",
    "magnitude": 6,
    "ascension": 270.90416666666664,
    "declination": -24.386666666666667
  },
  "M9": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 8.4,
    "ascension": 259.79908333333333,
    "declination": -18.51625
  },
  "M10": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 6.4,
    "ascension": 254.28716666666665,
    "declination": -4.099463888888889
  },
  "M11": {
    "name": "Wild Duck Cluster",
    "type": "Open cluster",
    "constellation": "Scutum",
    "magnitude": 6.3,
    "ascension": 282.775,
    "declination": -6.266666666666667
  },
  "M12": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 7.7,
    "ascension": 251.80908333333338,
    "declination": -1.9485277777777779
  },
  "M13": {
    "name": "Great Globular Cluster in Hercules",
    "type": "Globular cluster",
    "constellation": "Hercules",
    "magnitude": 5.8,
    "ascension": 250.42183333333335,
    "declination": 36.45986111111112
  },
  "M14": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 8.3,
    "ascension": 264.400625,
    "declination": -3.2459166666666666
  },
  "M15": {
    "name": "",
    "type": "Globular cluster",
    "constellation": "Pegasus",
    "magnitude": 6.2,
    "ascension": 322.49304166666667,
    "declination": 12.167
  },
  "M16": {
    "name": "Eagle Nebula",
    "type": "H II region",
    "constellation": "Serpens",
    "magnitude": 6,
    "ascension": 274.7,
    "declination": -13.816666666666666
  },
  "M17": {
    "name": "Omega, Swan, Horseshoe, or Lobster Nebula",
    "type": "H II region",
    "constellation": "Sagittarius",
    "magnitude": 6,
    "ascension": 275.1083333333333,
    "declination": -16.17666666666667
  },
  "M18": {
    "name": "",
    "type": "Open cluster",
    "constellation": "Sagittarius",
    "magnitude": 7.5,
    "ascension": 274.975,
    "declination": -17.133333333333333
  },
  "M19": {
    "name": "",
    "img_filename": "19.jpg",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 7.5,
    "ascension": 255.65704166666671,
    "declination": -26.267944444444442
  },
  "M20": {
    "name": "Trifid Nebula",
    "img_filename": "20.jpg",
    "type": "H II region",
    "constellation": "Sagittarius",
    "magnitude": 6.3,
    "ascension": 270.59583333333336,
    "declination": -23.029999999999998
  },
  "M21": {
    "name": "",
    "img_filename": "21.jpg",
    "type": "Open cluster",
    "constellation": "Sagittarius",
    "magnitude": 6.5,
    "ascension": 271.15000000000003,
    "declination": -22.5
  },
  "M22": {
    "name": "Sagittarius Cluster",
    "img_filename": "22.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 5.1,
    "ascension": 279.09975000000003,
    "declination": -23.90475
  },
  "M23": {
    "name": "",
    "img_filename": "23.jpg",
    "type": "Open cluster",
    "constellation": "Sagittarius",
    "magnitude": 6.9,
    "ascension": 269.2,
    "declination": -19.016666666666666
  },
  "M24": {
    "name": "Small Sagittarius Star Cloud",
    "img_filename": "24.jpg",
    "type": "Milky Way",
    "constellation": "Sagittarius",
    "magnitude": 2.5,
    "ascension": 274.25,
    "declination": -18.55
  },
  "M25": {
    "name": "",
    "img_filename": "25.jpg",
    "type": "Open cluster",
    "constellation": "Sagittarius",
    "magnitude": 4.6,
    "ascension": 277.90000000000003,
    "declination": -19.25
  },
  "M26": {
    "name": "",
    "img_filename": "26.jpg",
    "type": "Open cluster",
    "constellation": "Scutum",
    "magnitude": 8,
    "ascension": 281.3,
    "declination": -9.4
  },
  "M27": {
    "name": "Dumbbell Nebula",
    "img_filename": "27.jpg",
    "type": "Planetary nebula",
    "constellation": "Vulpecula",
    "magnitude": 7.5,
    "ascension": 299.9014166666667,
    "declination": 22.72113611111111
  },
  "M28": {
    "name": "",
    "img_filename": "28.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 7.7,
    "ascension": 276.1370416666666,
    "declination": -24.869833333333332
  },
  "M29": {
    "name": " Cooling Tower ",
    "img_filename": "29.jpg",
    "type": "Open cluster",
    "constellation": "Cygnus",
    "magnitude": 7.1,
    "ascension": 305.9833333333333,
    "declination": 38.52333333333333
  },
  "M30": {
    "name": "",
    "img_filename": "30.jpg",
    "type": "Globular cluster",
    "constellation": "Capricornus",
    "magnitude": 7.7,
    "ascension": 325.0921666666667,
    "declination": -23.179861111111112
  },
  "M31": {
    "name": "Andromeda Galaxy",
    "img_filename": "31.jpg",
    "type": "Spiral galaxy",
    "constellation": "Andromeda",
    "magnitude": 3.4,
    "ascension": 10.684583333333332,
    "declination": 41.26916666666666
  },
  "M32": {
    "name": "",
    "img_filename": "32.jpg",
    "type": "Dwarf elliptical galaxy",
    "constellation": "Andromeda",
    "magnitude": 8.1,
    "ascension": 10.674166666666666,
    "declination": 40.86527777777778
  },
  "M33": {
    "name": "Triangulum Galaxy",
    "img_filename": "33.jpg",
    "type": "Spiral galaxy",
    "constellation": "Triangulum",
    "magnitude": 5.7,
    "ascension": 23.45841666666667,
    "declination": 30.660194444444443
  },
  "M34": {
    "name": "",
    "img_filename": "34.jpg",
    "type": "Open cluster",
    "constellation": "Perseus",
    "magnitude": 5.5,
    "ascension": 40.525,
    "declination": 42.766666666666666
  },
  "M35": {
    "name": "",
    "img_filename": "35.jpg",
    "type": "Open cluster",
    "constellation": "Gemini",
    "magnitude": 5.3,
    "ascension": 92.27499999999999,
    "declination": 24.35
  },
  "M36": {
    "name": "",
    "img_filename": "36.jpg",
    "type": "Open cluster",
    "constellation": "Auriga",
    "magnitude": 6.3,
    "ascension": 84.04999999999998,
    "declination": 34.13444444444444
  },
  "M37": {
    "name": "",
    "img_filename": "37.jpg",
    "type": "Open cluster",
    "constellation": "Auriga",
    "magnitude": 6.2,
    "ascension": 88.075,
    "declination": 32.550555555555555
  },
  "M38": {
    "name": "Starfish Cluster",
    "img_filename": "38.jpg",
    "type": "Open cluster",
    "constellation": "Auriga",
    "magnitude": 7.4,
    "ascension": 82.175,
    "declination": 35.855000000000004
  },
  "M39": {
    "name": "",
    "img_filename": "39.jpg",
    "type": "Open cluster",
    "constellation": "Cygnus",
    "magnitude": 5.5,
    "ascension": 322.925,
    "declination": 48.43333333333333
  },
  "M40": {
    "name": "Winnecke 4",
    "img_filename": "40.jpg",
    "type": "Double star",
    "constellation": "Ursa Major",
    "magnitude": 9.7,
    "ascension": 185.55208333333331,
    "declination": 58.08305555555556
  },
  "M41": {
    "name": "",
    "img_filename": "41.jpg",
    "type": "Open cluster",
    "constellation": "Canis Major",
    "magnitude": 4.5,
    "ascension": 101.5,
    "declination": -20.766666666666666
  },
  "M42": {
    "name": "Orion Nebula",
    "img_filename": "42.jpg",
    "type": "H II region",
    "constellation": "Orion",
    "magnitude": 4,
    "ascension": 83.82208333333332,
    "declination": -5.391111111111112
  },
  "M43": {
    "name": "De Mairan's Nebula",
    "img_filename": "43.jpg",
    "type": "H II region",
    "constellation": "Orion",
    "magnitude": 9,
    "ascension": 83.9,
    "declination": -5.266666666666667
  },
  "M44": {
    "name": "Beehive Cluster or Praesepe",
    "img_filename": "44.jpg",
    "type": "Open cluster",
    "constellation": "Cancer",
    "magnitude": 3.7,
    "ascension": 130.1,
    "declination": 19.983333333333334
  },
  "M45": {
    "name": "Pleiades",
    "img_filename": "45.jpg",
    "type": "Open cluster",
    "constellation": "Taurus",
    "magnitude": 1.6,
    "ascension": 56.85,
    "declination": 24.116666666666667
  },
  "M46": {
    "name": "",
    "img_filename": "46.jpg",
    "type": "Open cluster",
    "constellation": "Puppis",
    "magnitude": 6.1,
    "ascension": 115.44999999999999,
    "declination": -14.816666666666666
  },
  "M47": {
    "name": "",
    "img_filename": "47.jpg",
    "type": "Open cluster",
    "constellation": "Puppis",
    "magnitude": 4.2,
    "ascension": 114.15,
    "declination": -14.5
  },
  "M48": {
    "name": "",
    "img_filename": "48.jpg",
    "type": "Open cluster",
    "constellation": "Hydra",
    "magnitude": 5.5,
    "ascension": 123.425,
    "declination": -5.75
  },
  "M49": {
    "name": "",
    "img_filename": "49.jpg",
    "type": "Elliptical galaxy",
    "constellation": "Virgo",
    "magnitude": 9.4,
    "ascension": 187.44458333333333,
    "declination": 8.000555555555556
  },
  "M50": {
    "name": "",
    "img_filename": "50.jpg",
    "type": "Open cluster",
    "constellation": "Monoceros",
    "magnitude": 5.9,
    "ascension": 105.80000000000001,
    "declination": -8.333333333333334
  },
  "M51": {
    "name": "Whirlpool Galaxy",
    "img_filename": "51.jpg",
    "type": "Spiral galaxy",
    "constellation": "Canes Venatici",
    "magnitude": 8.4,
    "ascension": 202.46958333333333,
    "declination": 47.195277777777775
  },
  "M52": {
    "name": "",
    "img_filename": "52.jpg",
    "type": "Open cluster",
    "constellation": "Cassiopeia",
    "magnitude": 5,
    "ascension": 351.05,
    "declination": 61.583333333333336
  },
  "M53": {
    "name": "",
    "img_filename": "53.jpg",
    "type": "Globular cluster",
    "constellation": "Coma Berenices",
    "magnitude": 8.3,
    "ascension": 198.23020833333334,
    "declination": 18.168166666666668
  },
  "M54": {
    "name": "",
    "img_filename": "54.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 8.4,
    "ascension": 283.763875,
    "declination": -30.47986111111111
  },
  "M55": {
    "name": "",
    "img_filename": "55.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 7.4,
    "ascension": 294.99879166666665,
    "declination": -30.96475
  },
  "M56": {
    "name": "",
    "img_filename": "56.jpg",
    "type": "Globular cluster",
    "constellation": "Lyra",
    "magnitude": 8.3,
    "ascension": 289.1482083333333,
    "declination": 30.18347222222222
  },
  "M57": {
    "name": "Ring Nebula",
    "img_filename": "57.jpg",
    "type": "Planetary nebula",
    "constellation": "Lyra",
    "magnitude": 8.8,
    "ascension": 283.3961625,
    "declination": 33.029175
  },
  "M58": {
    "name": "",
    "img_filename": "58.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Virgo",
    "magnitude": 10.5,
    "ascension": 189.43125,
    "declination": 11.818055555555555
  },
  "M59": {
    "name": "",
    "img_filename": "59.jpg",
    "type": "Elliptical galaxy",
    "constellation": "Virgo",
    "magnitude": 10.6,
    "ascension": 190.50958333333332,
    "declination": 11.646944444444443
  },
  "M60": {
    "name": "",
    "img_filename": "60.jpg",
    "type": "Elliptical galaxy",
    "constellation": "Virgo",
    "magnitude": 9.8,
    "ascension": 190.915,
    "declination": 11.5525
  },
  "M61": {
    "name": "",
    "img_filename": "61.jpg",
    "type": "Spiral galaxy",
    "constellation": "Virgo",
    "magnitude": 10.2,
    "ascension": 185.47875,
    "declination": 4.473611111111111
  },
  "M62": {
    "name": "",
    "img_filename": "62.jpg",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 7.4,
    "ascension": 255.30249999999998,
    "declination": -30.112361111111113
  },
  "M63": {
    "name": "Sunflower Galaxy",
    "img_filename": "63.jpg",
    "type": "Spiral galaxy",
    "constellation": "Canes Venatici",
    "magnitude": 9.3,
    "ascension": 198.95541666666668,
    "declination": 42.02916666666667
  },
  "M64": {
    "name": "Black Eye Galaxy",
    "img_filename": "64.jpg",
    "type": "Spiral galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 9.4,
    "ascension": 194.1820833333333,
    "declination": 21.68277777777778
  },
  "M65": {
    "name": "Leo Triplet",
    "img_filename": "65.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Leo",
    "magnitude": 10.3,
    "ascension": 169.73291666666665,
    "declination": 13.092222222222222
  },
  "M66": {
    "name": "Leo Triplet",
    "img_filename": "66.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Leo",
    "magnitude": 8.9,
    "ascension": 170.0625,
    "declination": 12.991666666666665
  },
  "M67": {
    "name": "",
    "img_filename": "67.jpg",
    "type": "Open cluster",
    "constellation": "Cancer",
    "magnitude": 6.1,
    "ascension": 132.82500000000002,
    "declination": 11.816666666666666
  },
  "M68": {
    "name": "",
    "img_filename": "68.jpg",
    "type": "Globular cluster",
    "constellation": "Hydra",
    "magnitude": 9.7,
    "ascension": 189.86658333333332,
    "declination": -26.744055555555555
  },
  "M69": {
    "name": "",
    "img_filename": "69.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 8.3,
    "ascension": 277.84625,
    "declination": -32.348083333333335
  },
  "M70": {
    "name": "",
    "img_filename": "70.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 9.1,
    "ascension": 280.80316666666664,
    "declination": -32.29211111111111
  },
  "M71": {
    "name": "",
    "img_filename": "71.jpg",
    "type": "Globular cluster",
    "constellation": "Sagitta",
    "magnitude": 6.1,
    "ascension": 298.44370833333335,
    "declination": 18.779194444444443
  },
  "M72": {
    "name": "",
    "img_filename": "72.jpg",
    "type": "Globular cluster",
    "constellation": "Aquarius",
    "magnitude": 9.4,
    "ascension": 313.36541666666665,
    "declination": -12.537305555555555
  },
  "M73": {
    "name": "",
    "img_filename": "73.jpg",
    "type": "Asterism",
    "constellation": "Aquarius",
    "magnitude": 9,
    "ascension": 314.72499999999997,
    "declination": -12.633333333333333
  },
  "M74": {
    "name": "Phantom Galaxy",
    "img_filename": "74.jpg",
    "type": "Spiral galaxy",
    "constellation": "Pisces",
    "magnitude": 10,
    "ascension": 24.174166666666668,
    "declination": 15.78361111111111
  },
  "M75": {
    "name": "",
    "img_filename": "75.jpg",
    "type": "Globular cluster",
    "constellation": "Sagittarius",
    "magnitude": 9.2,
    "ascension": 301.51979166666666,
    "declination": -21.921166666666668
  },
  "M76": {
    "name": "Little Dumbbell Nebula",
    "img_filename": "76.jpg",
    "type": "Planetary nebula",
    "constellation": "Perseus",
    "magnitude": 10.1,
    "ascension": 25.599999999999998,
    "declination": 51.57527777777778
  },
  "M77": {
    "name": "Cetus A",
    "img_filename": "77.jpg",
    "type": "Spiral galaxy",
    "constellation": "Cetus",
    "magnitude": 9.6,
    "ascension": 40.669583333333335,
    "declination": -0.013333333333333334
  },
  "M78": {
    "name": "",
    "img_filename": "78.jpg",
    "type": "Diffuse nebula",
    "constellation": "Orion",
    "magnitude": 8.3,
    "ascension": 86.69458333333334,
    "declination": 0.013888888888888888
  },
  "M79": {
    "name": "",
    "img_filename": "79.jpg",
    "type": "Globular cluster",
    "constellation": "Lepus",
    "magnitude": 8.6,
    "ascension": 81.04412500000001,
    "declination": -24.52425
  },
  "M80": {
    "name": "",
    "img_filename": "80.jpg",
    "type": "Globular cluster",
    "constellation": "Scorpius",
    "magnitude": 7.9,
    "ascension": 244.2600416666667,
    "declination": -22.97608333333333
  },
  "M81": {
    "name": "Bode's Galaxy",
    "img_filename": "81.jpg",
    "type": "Spiral galaxy",
    "constellation": "Ursa Major",
    "magnitude": 6.9,
    "ascension": 148.88833333333332,
    "declination": 69.06527777777778
  },
  "M82": {
    "name": "Cigar Galaxy",
    "type": "Starburst galaxy",
    "constellation": "Ursa Major",
    "magnitude": 8.4,
    "ascension": 148.9675,
    "declination": 69.67972222222222
  },
  "M83": {
    "name": "Southern Pinwheel Galaxy",
    "img_filename": "83.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Hydra",
    "magnitude": 7.5,
    "ascension": 204.25375,
    "declination": -29.865833333333335
  },
  "M84": {
    "name": "",
    "img_filename": "84.jpg",
    "type": "Lenticular galaxy",
    "constellation": "Virgo",
    "magnitude": 10.1,
    "ascension": 186.26541666666665,
    "declination": 12.886944444444444
  },
  "M85": {
    "name": "",
    "img_filename": "85.jpg",
    "type": "Lenticular galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 10,
    "ascension": 186.34999999999997,
    "declination": 18.191111111111113
  },
  "M86": {
    "name": "",
    "img_filename": "86.jpg",
    "type": "Lenticular galaxy",
    "constellation": "Virgo",
    "magnitude": 9.8,
    "ascension": 186.54874999999998,
    "declination": 12.946111111111112
  },
  "M87": {
    "name": "Virgo A",
    "img_filename": "87.jpg",
    "type": "Elliptical galaxy",
    "constellation": "Virgo",
    "magnitude": 9.6,
    "ascension": 187.70593075,
    "declination": 12.391123305555555
  },
  "M88": {
    "name": "",
    "img_filename": "88.jpg",
    "type": "Spiral galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 10.4,
    "ascension": 187.99666666666667,
    "declination": 14.420555555555556
  },
  "M89": {
    "name": "",
    "img_filename": "89.jpg",
    "type": "Elliptical galaxy",
    "constellation": "Virgo",
    "magnitude": 10.7,
    "ascension": 188.91583333333335,
    "declination": 12.55638888888889
  },
  "M90": {
    "name": "",
    "img_filename": "90.jpg",
    "type": "Spiral galaxy",
    "constellation": "Virgo",
    "magnitude": 10.3,
    "ascension": 189.20749999999998,
    "declination": 13.162777777777778
  },
  "M91": {
    "name": "",
    "img_filename": "91.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 11,
    "ascension": 188.86,
    "declination": 14.496388888888887
  },
  "M92": {
    "name": "",
    "img_filename": "92.jpg",
    "type": "Globular cluster",
    "constellation": "Hercules",
    "magnitude": 6.3,
    "ascension": 259.2807916666667,
    "declination": 43.13594444444444
  },
  "M93": {
    "name": "",
    "img_filename": "93.jpg",
    "type": "Open cluster",
    "constellation": "Puppis",
    "magnitude": 6,
    "ascension": 116.14999999999999,
    "declination": -23.866666666666667
  },
  "M94": {
    "name": "Croc's Eye or Cat's Eye",
    "img_filename": "94.jpg",
    "type": "Spiral galaxy",
    "constellation": "Canes Venatici",
    "magnitude": 9,
    "ascension": 192.72125,
    "declination": 41.120555555555555
  },
  "M95": {
    "name": "",
    "img_filename": "95.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Leo",
    "magnitude": 11.4,
    "ascension": 160.99041666666668,
    "declination": 11.703888888888889
  },
  "M96": {
    "name": "",
    "img_filename": "96.jpg",
    "type": "Spiral galaxy",
    "constellation": "Leo",
    "magnitude": 10.1,
    "ascension": 161.69041666666666,
    "declination": 11.82
  },
  "M97": {
    "name": "Owl Nebula",
    "img_filename": "97.jpg",
    "type": "Planetary nebula",
    "constellation": "Ursa Major",
    "magnitude": 9.9,
    "ascension": 168.69889166666664,
    "declination": 55.01902777777778
  },
  "M98": {
    "name": "",
    "img_filename": "98.jpg",
    "type": "Spiral galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 11,
    "ascension": 183.45121666666668,
    "declination": 14.900469444444445
  },
  "M99": {
    "name": "",
    "img_filename": "99.jpg",
    "type": "Spiral galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 10.4,
    "ascension": 184.70666666666668,
    "declination": 14.41638888888889
  },
  "M100": {
    "name": "",
    "img_filename": "100.jpg",
    "type": "Spiral galaxy",
    "constellation": "Coma Berenices",
    "magnitude": 10.1,
    "ascension": 185.72875000000002,
    "declination": 15.8225
  },
  "M101": {
    "name": "Pinwheel Galaxy",
    "img_filename": "101.jpg",
    "type": "Spiral galaxy",
    "constellation": "Ursa Major",
    "magnitude": 7.9,
    "ascension": 210.8025,
    "declination": 54.34916666666667
  },
  "M102": {
    "name": "Spindle Galaxy",
    "img_filename": "102.jpg",
    "type": "Lenticular galaxy",
    "constellation": "Draco",
    "magnitude": 10.7,
    "ascension": 226.62291666666667,
    "declination": 55.763333333333335
  },
  "M103": {
    "name": "",
    "img_filename": "103.jpg",
    "type": "Open cluster",
    "constellation": "Cassiopeia",
    "magnitude": 7.4,
    "ascension": 23.299999999999997,
    "declination": 60.7
  },
  "M104": {
    "name": "Sombrero Galaxy",
    "img_filename": "104.jpg",
    "type": "Spiral galaxy",
    "constellation": "Virgo",
    "magnitude": 9,
    "ascension": 189.9975,
    "declination": -11.623055555555556
  },
  "M105": {
    "name": "",
    "img_filename": "105.jpg",
    "type": "Elliptical galaxy",
    "constellation": "Leo",
    "magnitude": 10.2,
    "ascension": 161.95666666666665,
    "declination": 12.581666666666667
  },
  "M106": {
    "name": "",
    "img_filename": "106.jpg",
    "type": "Spiral galaxy",
    "constellation": "Canes Venatici",
    "magnitude": 9.1,
    "ascension": 184.73958333333334,
    "declination": 47.303888888888885
  },
  "M107": {
    "name": "",
    "img_filename": "107.jpg",
    "type": "Globular cluster",
    "constellation": "Ophiuchus",
    "magnitude": 8.9,
    "ascension": 248.13275000000002,
    "declination": -13.053777777777778
  },
  "M108": {
    "name": "",
    "img_filename": "108.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Ursa Major",
    "magnitude": 10.7,
    "ascension": 167.87916666666666,
    "declination": 55.674166666666665
  },
  "M109": {
    "name": "",
    "img_filename": "109.jpg",
    "type": "Barred Spiral galaxy",
    "constellation": "Ursa Major",
    "magnitude": 10.6,
    "ascension": 179.39999999999998,
    "declination": 53.37444444444444
  },
  "M110": {
    "name": "",
    "img_filename": "110.jpg",
    "type": "Dwarf elliptical galaxy",
    "constellation": "Andromeda",
    "magnitude": 9,
    "ascension": 10.092083333333333,
    "declination": 41.68527777777778
  }
};

module.exports = messier_objects;