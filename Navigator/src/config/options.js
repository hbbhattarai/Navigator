

const chapters = {
  gelephu: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'landelevation3d',
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
      zoom: 13.8,
      pitch: 60,
      bearing: 0.13,
      duration: 800,
      essential: true
    },
  },
  landmarks: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'visible',
      },
    ],
    location: {
      center: [90.48732307977042, 26.872462554684148],
      zoom: 13.5,
      pitch: 0,
      essential: true,
      bearing: 0.13,
      duration: 800
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
  landmarks: {
    layer: 'boundary',
  },
  gelephu: {
    layer: 'landelevation3d',
    features: [
      {
        label: 'meters above sea level',
        value: 'value',
        type: 'inline',
      },
    ],
  },

};

const legendOptions = {
  boundary: {

  },
  landelevation: {
    name: 'Land Elevation (m)',
    colors: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0'],
    min: 145,
    max: 250,
    range: true,
  },
  landelevation3d: {
    name: 'Land Elevation (m)',
    colors: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0'],
    min: 145,
    max: 250,
    range: true,
  },
};

const chapterLayers = {
  gelephu: ['boundary'],
  landmarks: ['landelevation3d'],
};


export {
  chapters, legendLabels, filters, legendOptions, chapterLayers
  , tooltipConfig,
};
