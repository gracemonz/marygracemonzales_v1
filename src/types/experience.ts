export interface Experience {
  yearStarted: string;
  yearEnded: string;
  jobTitle: string;
  company: string;
  client?: string;
  responsibilities: string;
  keyAchievements: string[];
  technologyUsed: (Technologies | CMS | Frameworks | Libraries | Databases)[];
  isCurrent: boolean;
}

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
  | "RTK Query";

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
