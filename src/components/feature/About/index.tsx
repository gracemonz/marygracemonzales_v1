import ExperienceList from "@/components/feature/ExperienceList";
import Container from "@/components/feature/Container";
import { Typography } from "@/components/base";

const About = () => {
  return (
    <div className="max-w-[551px]">
      <Typography.Subheader>About</Typography.Subheader>
      <div className="mt-6 py-6 grid grid-row-3 grid-flow-row gap-6 font-light">
        <Typography.BodyText>
          Initially, becoming a developer wasn&apos;t on my radar after
          graduating from university. I dreamed of creatively designing UX
          solutions for businesses. But curiosity nudged me into the world of
          feature development and web solutions, launching my career as a PHP
          Developer in 2018. What started as a curious venture has now become my
          main passion.
        </Typography.BodyText>
        <Typography.BodyText>
          I&apos;ve dabbled in various technologies, building SaaS for
          <Typography.Highlight> advertising</Typography.Highlight>,
          <Typography.Highlight> real estate</Typography.Highlight>,
          <Typography.Highlight> retail</Typography.Highlight>,
          <Typography.Highlight> payment solutions</Typography.Highlight>, and
          <Typography.Highlight> logistics</Typography.Highlight>. These days, I
          focus on developing and maintaining features for
          <Typography.Highlight> Trunkrs&apos; </Typography.Highlight>
          in-house applications to keep their operations running smoothly.
        </Typography.BodyText>
        <Typography.BodyText>
          When I&apos;m not coding, you&apos;ll find me exploring new
          restaurants, traveling locally, free diving, or playing games.
        </Typography.BodyText>
      </div>
    </div>
  );
};

export default About;
