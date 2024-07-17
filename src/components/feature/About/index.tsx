import ExperienceList from "@/components/feature/ExperienceList";
import Container from "@/components/feature/Container";
import { Typography } from "@/components/base";

const About = () => {
  return (
    <Container>
      <div className="grid grid-rows-1 gap-4 grid-flow-col h-96">
        <div>
          <Typography.Subheader>About</Typography.Subheader>
        </div>
        <ExperienceList />
      </div>
    </Container>
  );
};

export default About;
