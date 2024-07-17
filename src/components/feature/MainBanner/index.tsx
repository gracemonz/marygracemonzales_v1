import { Typography } from "@/components/base";
import Container from "../Container";

const MainBanner = () => {
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center">
        <div>
          <Typography.Caption>Hello, I am</Typography.Caption>
          <Typography.Header className="lg:text-6xl font-bold text-5xl">
            Grace Monzales
          </Typography.Header>
          <Typography.BodyText className="lg:text-2xl">
            I&apos;m a Frontend Engineer who crafts visually appealing and
            highly functional web applications. At present, I&apos;m directing
            my efforts towards developing feature-based solutions for
            Trunkrs&apos; daily logistic operations.
          </Typography.BodyText>
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
