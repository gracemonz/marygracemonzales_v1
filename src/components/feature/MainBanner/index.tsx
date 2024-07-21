"use client";
import { Typography } from "@/components/base";
import Container from "../Container";
import SocialList, { SocialsEnum } from "../SocialsList";
import MouseIcon from "src/svg/Mouse";
import GithubIcon from "src/svg/Github";
import GitlabIcon from "src/svg/Gitlab";
import { motion } from "framer-motion";

const MainBanner = () => {
  const socials = ["LinkedIn", "Twitter", "Github", "Gitlab"] as SocialsEnum[];

  return (
    <Container>
      <div className="h-screen flex flex-col justify-center">
        <div className="lg:my-20">
          <Typography.Caption className=" lg:text-2xl font-mono">
            Hello! 👋 I am
          </Typography.Caption>
          <Typography.Header className="lg:text-6xl font-bold text-5xl">
            Grace Monzales
          </Typography.Header>
          <Typography.BodyText className="lg:text-2xl font-light">
            I&apos;m a Frontend Engineer who crafts visually appealing and
            highly functional web applications. At present, I&apos;m directing
            my efforts towards developing feature-based solutions for
            <a href="https://trunkrs.nl/" target="_blank">
              &nbsp;<Typography.Highlight>Trunkrs&apos;</Typography.Highlight>
              &nbsp;
            </a>
            daily logistic operations.
          </Typography.BodyText>
        </div>
        <div className="my-10 md:block sm:block lg:hidden">
          <SocialList platforms={socials} position="horizontal" />
        </div>
        <div className="hidden my-10 lg:flex w-auto flex-col gap-4 items-center align-bottom">
          <Typography.Caption className="lg:text-2xl text-flamingo font-mono">
            Scroll down
          </Typography.Caption>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MouseIcon className="fill-flamingo h-8 w-8" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
