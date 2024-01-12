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
    'TO REPLACE.',
  sideBarInfo: ['School'],
  popupInfo: ['School'],
  filters: [
    {
      type: 'dropdown',
      title: 'Programs ',
      columnHeader: 'Programslist',
      listItems: [Accounting”,
“Accounting and Business/Management”,
“Accounting and Finance”,
“Accounting and Related Services (Other)”, 
“Accounting Technology/Technician and Bookkeeping”, 
“Acoustics”, 
“Acting”, 
“Actuarial Science”, “Acupuncture and Oriental Medicine”, 
“Administration of Special Education”, 
“Administrative Assistant and Secretarial Science (General)”,
“Adult and Continuing Education Administration”, 
“Adult and Continuing Education and Teaching”,
“Adult Development and Aging”, 
“Adult Health Nurse/Nursing”, 
“Adult Literacy Tutor/Instructor”,
“Advanced General Dentistry”, 
“Advanced Legal Research/Studies (General)”, 
“Advanced/Graduate Dentistry and Oral Sciences (Other)”, 
“Advertising”, 
“Aeronautical/Aerospace Engineering Technology/Technician”, 
“Aeronautics/Aviation/Aerospace Science and Technology (General)”, 
“Aerospace Ground Equipment Technology”,
“Aerospace Physiology and Medicine”, 
“Aerospace/Aeronautical/Astronautical/Space Engineering (General)”,
“African Languages/Literatures/Linguistics”, 
“African Studies”,       
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
