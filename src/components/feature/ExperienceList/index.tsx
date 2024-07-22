import { Typography } from "src/components/base";
import Container from "../Container";
import { workExperience } from "src/constants/experience";
import ExpPanel from "../ExpPanel";

const ExperienceList = () => {
  const workExperiences = workExperience;
  const hasExperience = workExperience.length > 0 || false;
  return (
    <div>
      <div className="sm:p-0 md:p-0 lg:pl-5">
        <Typography.Subheader>Experience</Typography.Subheader>
      </div>
      {hasExperience &&
        workExperiences.map((exp, index) => <ExpPanel key={index} {...exp} />)}
      <div className="my-10 font-light">
        <Typography.SmallText>
          Inspired by&nbsp;
          <a href="https://brittanychiang.com/" target="_blank">
            <Typography.Highlight>Brittany Chiang&apos;s</Typography.Highlight>
          </a>
          &nbsp;web portfolio. Designed using&nbsp;
          <a href="https://www.figma.com/" target="_blank">
            <Typography.Highlight>Figma</Typography.Highlight>
          </a>
          &nbsp;and coded in&nbsp;
          <a href="https://code.visualstudio.com/" target="_blank">
            <Typography.Highlight>Visual Studio Code</Typography.Highlight>
          </a>
          . Built using&nbsp;
          <a href="https://nextjs.org/" target="_blank">
            <Typography.Highlight>Next.js</Typography.Highlight>
          </a>
          , and&nbsp;
          <a href="https://tailwindcss.com/" target="_blank">
            <Typography.Highlight>Tailwind CSS</Typography.Highlight>
          </a>
          , deployed with&nbsp;
          <a href="https://vercel.com/" target="_blank">
            <Typography.Highlight>Vercel</Typography.Highlight>
          </a>
          .
        </Typography.SmallText>
      </div>
    </div>
  );
};

export default ExperienceList;
