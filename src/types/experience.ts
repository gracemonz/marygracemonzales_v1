export interface Experience {
  yearStarted: string;
  yearEnded: string;
  jobTitle: string;
  projects?: Project[];
  company: CompanyInformation;
  client?: ClientInformation;
  responsibilities: string;
  keyAchievements: string[];
  technologyUsed: (Technologies | CMS | Frameworks | Libraries | Databases)[];
  isCurrent: boolean;
}

export type Information = { name: string; website?: string };

export interface CompanyInformation extends Information {}

export interface ClientInformation extends Information {}

export interface Project extends Information {}

export type Technologies =
  | "Typescript"
  | "AngularJS"
  | "VueJS"
  | "Javascript"
  | "CSS"
  | "HTML"
  | "React"
  | "React Native"
  | "PHP"
  | "Python"
  | "Go"
  | "HTML & SCSS"
  | "NodeJS";

export type Libraries =
  | "NextUI"
  | "Material UI"
  | "ExpressJS"
  | "GraphQL"
  | "ReactJS"
  | "ExpressJS"
  | "Apollo"
  | "Storybook"
  | "Jest"
  | "SASS/LESS"
  | "Redux"
  | "RTK Query"
  | "MobX";

export type Frameworks =
  | "NextJS"
  | "Laravel"
  | "Angular"
  | "Gatsby"
  | "Bootstrap";

export type Databases = "MongoDB" | "PostgreSQL";

export type CMS = "Drupal 7" | "Drupal 8" | "Strapi";

export type SoftSkills =
  | "Adaptability"
  | "Fast learner"
  | "Excellent communication skills"
  | "Strong collaboration skills";

export type SpokenLanguages = "Tagalog" | "English" | "Japanese (N5)";
