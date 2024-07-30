import { Experience } from "src/types/experience";

export const workExperience: Experience[] = [
  {
    yearStarted: "2022",
    yearEnded: "2024",
    jobTitle: "Frontend Developer",
    company: {
      name: "Microsourcing",
    },
    client: {
      name: "Trunkrs",
      website: "https://trunkrs.nl/",
    },
    projects: [
      {
        name: "Trunkrs shipping portal",
        website: "https://portal.trunkrs.app/",
      },
      { name: "Track and Trace", website: "https://parcel.trunkrs.nl/" },
    ],
    responsibilities:
      "Worked on building front-end features  for a logistics company that offers SaaS for B2B and B2C business solutions for different webshops and personal owned businesses.",
    keyAchievements: ["", ""],
    technologyUsed: [
      "Typescript",
      "React",
      "React Native",
      "Storybook",
      "Jest",
      "NodeJS",
      "Material UI",
      "SASS/LESS",
      "Redux",
      "RTK Query",
      "MobX",
      "Zustand",
    ],
    isCurrent: true,
    companyLink: "https://trunkrs.nl/",
  },
  {
    yearStarted: "2021",
    yearEnded: "2022",
    jobTitle: "Full Stack Developer",
    company: {
      name: "Emapta Inc.",
    },
    projects: [
      {
        name: "DentiCare",
        website: "https://denticarepaymentplans.com.au/",
      },
    ],
    client: {
      name: "Sliqpay",
      website: "https://sliqpay.com",
    },
    responsibilities:
      "Maintained and developed features for their SaaS application that offers payment solution for their clients in medical field.",
    keyAchievements: ["", ""],
    technologyUsed: ["Typescript", "AngularJS", "PHP", "Material UI", "Jest"],
    isCurrent: false,
    companyLink: "https://denticarepaymentplans.com.au/",
  },
  {
    yearStarted: "2020",
    yearEnded: "2021",
    jobTitle: "Full Stack Developer",
    company: {
      name: "Umpisa Inc.",
      website: "https://www.umpisa.co/",
    },
    responsibilities:
      "Developed new websites and maintained legacy codebase for both internal and international clients of Umpisa.",
    keyAchievements: ["", ""],
    projects: [
      { name: "CloudSense", website: "https://prod.ulap.co/auth/login" },
      { name: "Venio", website: "https://www.veniopay.com/" },
      { name: "Kamada", website: "https://www.facebook.com/KamadaByUmpisa/" },
    ],
    technologyUsed: [
      "React",
      "Javascript",
      "Python",
      "NodeJS",
      "ExpressJS",
      "Apollo",
      "Jest",
      "Material UI",
      "GraphQL",
    ],
    isCurrent: false,
    companyLink: "https://www.umpisa.co/",
  },
  {
    yearStarted: "2018",
    yearEnded: "2020",
    jobTitle: "PHP Developer",
    projects: [
      { name: "Bonakid", website: "https://www.parenteam.com.ph/" },
      { name: "Marlboro", website: "https://marlboro.ph/" },
    ],
    company: {
      name: "Coreproc Inc.",
      website: "https://coreproc.com/",
    },
    responsibilities:
      "Worked as a PHP Developer. Contributed on maintaining existing web applications as well as creating marketing websites for local clients in PH.",
    keyAchievements: ["", ""],
    technologyUsed: [
      "React",
      "Javascript",
      "Drupal 7",
      "Drupal 8",
      "VueJS",
      "Laravel",
    ],
    isCurrent: false,
    companyLink: "https://coreproc.com/",
  },
];
