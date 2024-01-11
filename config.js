'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/streets-v11',
  accessToken:
    'pk.eyJ1IjoiYW5uYXNpbGxlcnMiLCJhIjoiY2xweDZ2a2RrMGk1ZjJqbnJnc25pZGhyYSJ9.0kwnSzA5FG6Cmse2aBC4AQ',
  CSV: './mapbox_abridged.csv',
  center: [-120.234, 47.398],
  zoom: 6,
  title: 'Program Data',
  description:
    'TO REPLACE',
  sideBarInfo: ['School'],
  popupInfo: ['IPEDS_ID'],
  filters: [
    {
      type: 'dropdown',
      title: 'Languages supported: ',
      columnHeader: 'Programslist',
      listItems: [
       "Civil Drafting and Civil Engineering CAD/CADD”, 
 "Civil Engineering (General)”, 
 "Civil Engineering (Other)”,
 "Civil Engineering Technologies/Technicians”, 
 "Classical/Ancient Mediterranean/Near Eastern Studies and Archaeology”, 
 "Classics and Classical Languages/Literatures/Linguistics (General)”, 
 "Classics and Classical Languages/Literatures/Linguistics (Other)”,
 "Climate Science”, 
 "Clinical and Industrial Drug Development”,
 "Clinical and Translational Science”,
 "Clinical Child Psychology”,
 "Clinical Laboratory Science/Medical Technology/Technologist”, 
 "Clinical Nurse Leader”, 
 "Clinical Nurse Specialist”,
 "Clinical Nutrition/Nutritionist”,
 "Clinical Pastoral Counseling/Patient Counseling”, 
 "Clinical Psychology”,
 "Clinical Research Coordinator”, 
 "Clinical/Counseling and Applied Psychology (Other)”, 
 "Clinical/Hospital/Managed Care Pharmacy”, 
 "Clinical/Medical Laboratory Assistant”,
 "Clinical/Medical Laboratory Science and Allied Professions (Other)”, 
 "Clinical/Medical Laboratory Technician”, 
 "Clinical/Medical Social Work”,
 "Cloud Computing”, 
 "Cognitive Psychology and Psycholinguistics”, 
 "Cognitive Science (General)”, 
 "College Student Counseling and Personnel Services”,
 "College/Postsecondary/University Teaching”, 
 "Comedy Writing and Performance”, 
 "Commercial and Advertising Art”, 
 "Commercial Photography”,
 "Communication (General)”, 
 "Communication and Media Studies (Other)”, 
 "Communication Arts and Literature Teacher Education”, 
 "Communication Disorders Sciences and Services (Other)”, 
 "Communication Management and Strategic Communications”, 
 "Communication Sciences and Disorders (General)”,
 "Communication/Journalism/Related Programs (Other)”,
 "Communications Technologies/Technicians and Support Services (Other)”, 
 "Communications Technology/Technician”, 
 "Community College Administration”, 
 "Community Health and Preventive Medicine”,
 "Community Health Services/Liaison/Counseling”, 
 "Community Organization and Advocacy”, 
 "Community Psychology”, 
 "Community/Environmental/SociallyEngaged Art”,
 "Comparative and Laboratory Animal Medicine”, 
 "Comparative Group Studies”,
 "Comparative Law”, 
 "Comparative Literature”,
 "Comparative Psychology”,
 "Computational and Applied Mathematics”,
 "Computational Biology”, 
 "Computational Mathematics”,
 "Computational Science”, 
 "Computer and Information Sciences (General)”,
 "Computer and Information Sciences and Support Services (Other)”, 
 "Computer and Information Sciences/ Other”,
 "Computer and Information Systems Security/Auditing/Information Assurance”, 
 "Computer Engineering (General)”, 
 "Computer Engineering (Other)”,
 "Computer Engineering Technologies/Technicians (Other)”, 
 "Computer Engineering Technology/Technician”, 
 "Computer Game Programming”,
 "Computer Graphics”, 
 "Computer Hardware Engineering”, 
 "Computer Programming (Other)”,
 "Computer Programming/Programmer (General)”, 
 "Computer Programming/Specific Applications”, 
 "Computer Programming/Specific Platforms”, 
 "Computer Science”,
 "Computer Software and Media Applications (Other)”, 
 "Computer Software Engineering”, 
 "Computer Software Technology/Technician”, 
 "Computer Support Specialist”, 
 "Computer Systems Analysis/Analyst”, 
 "Computer Systems Networking and Telecommunications”, 
 "Computer Teacher Education”, 
 "Computer/Computer Systems Technology/Technician”, 
 "Computer/Information Technology Services Administration and Management (Other)”, 
 "Condensed Matter and Materials Physics”, 
 "Conducting”,
 "Conservation Biology”, 
 "Construction Engineering”, 
 "Construction Engineering Technology/Technician”,
 "Construction Management (General)”, 
 "Consumer Economics”, 
 "Consumer Merchandising/Retailing Management”,
 "Consumer Services and Advocacy”, 
 "Contemplative Studies/Inquiry”, 
 "Corrections”, 
 "Corrections Administration”, 
 "Corrections and Criminal Justice (Other)”,
 "Costume Design”, 
 "Counseling Psychology”, 
 "Counselor Education/School Counseling and Guidance Services”, 
 "Court Reporting and Captioning/Court Reporter”, 
 "Crafts/Craft Design/Folk Art and Artisanry”, 
 "Creative Writing”,
 "Criminal Justice and Corrections (General)”, 
 "Criminal Justice/Law Enforcement Administration”, 
 "Criminal Justice/Police Science”,
 "Criminal Justice/Safety Studies”,
 "Criminal Law and Procedure”, 
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
