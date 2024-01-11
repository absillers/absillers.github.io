'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/standard',
  accessToken:
    'pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA',
  CSV: './Sample_Data (1).csv',
  center: [-120.234, 47.398],
  zoom: 6,
  title: 'Program List',
  description:
    'TO REPLACE',
  sideBarInfo: ['School'],
  popupInfo: ['School'],
  filters: [
    {
      type: 'dropdown',
      title: 'Programs: ',
      columnHeader: 'Programslist',
      listItems: [
“Accounting”,
"Accounting and Business/Management”,
“Accounting and Finance”,
"Accounting and Related Services (Other)”, 
"Accounting Technology/Technician and Bookkeeping”, 
"Acoustics”, 
"Acting”
      ],
    },
  ],
};
