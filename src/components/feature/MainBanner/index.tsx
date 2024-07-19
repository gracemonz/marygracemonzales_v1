import { Typography } from "@/components/base";
import Container from "../Container";
import SocialList, { SocialsEnum } from "../SocialsList";

const MainBanner = () => {
  const socials = ["LinkedIn", "Twitter", "Github", "Gitlab"] as SocialsEnum[];

  return (
    <Container>
      <div className="h-screen flex flex-col justify-center">
        <div>
          <Typography.Caption className=" lg:text-2xl font-mono">
            Hello, I am
          </Typography.Caption>
          <Typography.Header className="lg:text-6xl font-bold text-5xl">
            Grace Monzales
          </Typography.Header>
          <Typography.BodyText className="lg:text-2xl">
            I&apos;m a Frontend Engineer who crafts visually appealing and
            highly functional web applications. At present, I&apos;m directing
            my efforts towards developing feature-based solutions for
            <Typography.Highlight> Trunkrs&apos;</Typography.Highlight> daily
            logistic operations.
          </Typography.BodyText>
        </div>
        <div className="my-10 md:block sm:block lg:hidden">
          <SocialList platforms={socials} position="horizontal" />
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
