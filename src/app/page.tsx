import Container from "@/components/feature/Container";
import ExperienceList from "@/components/feature/ExperienceList";
import { MovingBackground } from "@/components/feature/MovingBackground";
import { NextUIProvider } from "@nextui-org/system";
import About from "src/components/feature/About";
import ContactInfo from "src/components/feature/ContactInfo";
import MainBanner from "src/components/feature/MainBanner";

export default function Page() {
  return (
    <NextUIProvider>
      <div className="relative">
        <ContactInfo />
        <MovingBackground />
        <div className="container md:container md:mx-auto mx-auto z-20 relative">
          <MainBanner></MainBanner>
          <Container>
            <div className="h-full grid lg:grid-rows-2 xl:grid-cols-2 md:grid-row-2 gap-10">
              <About />
              <ExperienceList />
            </div>
          </Container>
        </div>
      </div>
    </NextUIProvider>
  );
}
