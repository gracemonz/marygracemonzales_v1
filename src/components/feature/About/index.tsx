import { Typography } from "@/components/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

const About = () => {
  return (
    <div className="max-w-[551px]">
      <Typography.Subheader>About</Typography.Subheader>
      <div className="mt-6 py-6 grid grid-row-3 grid-flow-row gap-6 font-light">
        <Typography.BodyText>
          I initially thought a career as a UI/UX Designer was my calling when I
          enrolled as a computer science student, driven by my love for creating
          aesthetically pleasing and functional web applications. As an artist
          at heart, I found joy in the design process. But what I didn&apos;t
          anticipate was the fun in both designing and making those designs work
          through development. Curiosity nudged me into the world of feature
          development and web solutions, launching my career as a PHP Developer
          in 2018. What began as a curious detour has now become my main
          passion.
        </Typography.BodyText>
        <Typography.BodyText>
          I&apos;ve delved into various technologies, building SaaS for
          <Typography.Highlight>&nbsp;advertising</Typography.Highlight>,
          <Typography.Highlight>&nbsp;real estate</Typography.Highlight>,
          <Typography.Highlight>&nbsp;retail</Typography.Highlight>,
          <Typography.Highlight>&nbsp;payment solutions</Typography.Highlight>,
          and
          <Typography.Highlight>&nbsp;logistics</Typography.Highlight>. These
          days, I focus on developing and maintaining features for
          <a href="https://trunkrs.nl/" target="_blank">
            <Typography.Highlight>
              &nbsp;Trunkrs&apos;&nbsp;
            </Typography.Highlight>
          </a>
          in-house applications to keep their operations running smoothly.
        </Typography.BodyText>
        <Typography.BodyText>
          When I&apos;m not coding, you&apos;ll find me exploring new
          restaurants, travelling locally, free diving, or playing games.
        </Typography.BodyText>
      </div>
      {/* soon */}
      {/* <div className="cursor-pointer">
        <Typography.Subheader>View full résumé</Typography.Subheader>
      </div> */}
    </div>
  );
};

export default About;
