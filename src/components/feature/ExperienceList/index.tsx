import { Typography } from "src/components/base";
import Container from "../Container";
import { workExperience } from "src/constants/experience";
import ExpPanel from "../ExpPanel";

const ExperienceList = () => {
  const workExperiences = workExperience;
  const hasExperience = workExperience.length > 0 || false;
  return (
    <div>
      <div className="pl-5">
        <Typography.Subheader>Experience</Typography.Subheader>
      </div>
      {hasExperience &&
        workExperiences.map((exp, index) => <ExpPanel key={index} {...exp} />)}
    </div>
  );
};

export default ExperienceList;
