'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/streets-v11',
  accessToken:
    'pk.eyJ1IjoiYW5uYXNpbGxlcnMiLCJhIjoiY2xweDZ2a2RrMGk1ZjJqbnJnc25pZGhyYSJ9.0kwnSzA5FG6Cmse2aBC4AQ',
  CSV: './Sample_Data.csv',
  center: [-120.234, 47.398],
  zoom: 6,
  title: 'Program Map',
  description:
    'took out some programs.',
  sideBarInfo: ['School'],
  popupInfo: ['School'],
  filters: [
    {
      type: 'dropdown',
      title: 'Programs ',
      columnHeader: 'Programslist',
      listItems: ['accounting','chemistry',
                 ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
  ],
};
