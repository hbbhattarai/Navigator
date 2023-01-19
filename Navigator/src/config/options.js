

const chapters = {
  gelephu: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'baseline',
        opacity: 0,
      },
      {
        id: 'quadrant',
        opacity: 0,
      },
      {
        id: 'order',
        opacity: 0,
      },
      {
        id: 'type',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },

    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13.8,
      pitch: 70,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
  goals: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'baseline',
        opacity: 0,
      },
      {
        id: 'quadrant',
        opacity: 0,
      },
      {
        id: 'order',
        opacity: 0,
      },
      {
        id: 'type',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },

    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13,
      pitch: 40,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
  reference: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'baseline',
        opacity: 1,
      },
      {
        id: 'quadrant',
        opacity: 0,
      },
      {
        id: 'order',
        opacity: 0,
      },
      {
        id: 'type',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },

    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13,
      pitch: 0,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
  quadrant: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'baseline',
        opacity: 0,
      },
      {
        id: 'quadrant',
        opacity: 1,
      },
      {
        id: 'order',
        opacity: 0,
      },
      {
        id: 'type',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },

    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13,
      pitch: 60,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
  order: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'baseline',
        opacity: 0,
      },
      {
        id: 'quadrant',
        opacity: 0,
      },
      {
        id: 'order',
        opacity: 1,
      },
      {
        id: 'type',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },

    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13,
      pitch: 0,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
  type: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'baseline',
        opacity: 0,
      },
      {
        id: 'quadrant',
        opacity: 0,
      },
      {
        id: 'order',
        opacity: 0,
      },
      {
        id: 'type',
        opacity: 1,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },

    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13,
      pitch: 30,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
};

const legendLabels = {
  // flood: 'Flood Hazard Levels',
  // landelevation3d: 'Land Elevation',
};

const filters = {
  // land: [
  //   {
  //     hasAll: true,
  //     value: 'buildingType',
  //     label: 'Building Type',
  //     onChange: 'updateBuildingType',
  //     options: [
  //       {
  //         label: 'Residential',
  //         value: 'residential',
  //       },
  //       {
  //         label: 'Private',
  //         value: 'private',
  //       },
  //       {
  //         label: 'Health',
  //         value: 'health',
  //       },
  //       {
  //         label: 'Education',
  //         value: 'education',
  //       },
  //     ],
  //   },
  // ],

};

const tooltipConfig = {
  gelephu: {
    layer: 'boundary',
    features: [
      {
        label: '',
        value: 'Name',
        type: 'inline',
      },
    ],
  },
  goals: {
    layer: 'reference',
    features: [
      {
        label: '',
        value: 'name',
        type: 'inline',
      },
    ],
  },
  reference: {
    layer: 'baseline',
    features: [
      {
        label: '',
        value: 'Street',
        type: 'inline',
      },
    ],

  },
  quadrant: {
    layer: 'quadrant',
    features: [
      {
        label: '',
        value: 'Name',
        type: 'inline',
      },
    ],

  },
  order: {
    layer: 'order',
    features: [
      {
        label: '',
        value: 'StreetOrde',
        type: 'inline',
      },
    ],

  },
  type: {
    layer: 'type',
    features: [
      {
        label: '',
        value: 'StreetType',
        type: 'inline',
      },
    ],

  },

};

const legendOptions = {
  order: {
    name: ['  ORD1  ','  | ','  ORD2  ',' |  ','  ORD3  ', ' |  ','  ORD4  ',' |  ','   ORD5  '],
    colors: ['#EC581C','#FEFCFC' ,'#ECB01C','#FEFCFC' ,'#1298F0','#FEFCFC' ,'#12F016','#FEFCFC' , '#2F312F'],
  },
  type: {
    name: ['  Zhung Lam  ','  | ','  Lam  ',' |  ','  Zur Lam  ','  | ','   ACC  '],
    colors: ['#0F72F0','#FEFCFC' ,'#0FEDF0','#FEFCFC' ,'#EC644B','#FEFCFC' , '#DAA919'],
  },
};

const chapterLayers = {
  gelephu: ['boundary'],
  baseline: ['baseline'],
  reference: ['reference'],
  quadrant: ['quadrant'],
  order: ['order'],
  type: ['type'],
};


export {
  chapters, legendLabels, filters, legendOptions, chapterLayers
  , tooltipConfig,
};
