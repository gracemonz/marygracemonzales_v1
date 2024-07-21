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
        <Typography.Subheader>My work journey</Typography.Subheader>
      </div>
      {hasExperience &&
        workExperiences.map((exp, index) => <ExpPanel key={index} {...exp} />)}
    </div>
  );
};

export default ExperienceList;
