'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA',
  CSV: './Sample_Data.csv',
  center: [-120.234, 47.398],
  zoom: 6,
  title: 'Program List',
  description:
    'Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.',
  sideBarInfo: ['School'],
  popupInfo: ['School'],
  filters: [
    {
      type: 'dropdown',
      title: 'Programs: ',
      columnHeader: 'Programslist',
      listItems: [
       'Biochemistry',
        'Accounting',
        'Food Science',
      ],
    },
  ],
};
