export interface Experience {
  yearStarted: string;
  yearEnded: string;
  jobTitle: string;
  company: string;
  client?: string;
  responsibilities: string;
  keyAchievements: string[];
  technologyUsed: Technologies[];
}

export type Technologies =
  | "Typescript"
  | "AngularJS"
  | "Javascript"
  | "CSS"
  | "HTML"
  | "React"
  | "React Native"
  | "PHP"
  | "Python"
  | "Storybook"
  | "Go";

export type Libraries =
  | "NextUI"
  | "Material UI"
  | "ExpressJS"
  | "GraphQL"
  | "ReactJS"
  | "Apollo";

export type Frameworks =
  | "NextJS"
  | "Laravel"
  | "Angular"
  | "Gatsby"
  | "Bootstrap";

export type SoftSkills =
  | "Adaptability"
  | "Fast learner"
  | "Excellent communication skills"
  | "Strong collaboration skills";

export type SpokenLanguages = "Tagalog" | "English" | "Japanese (N5)";
