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
          <div className="h-full grid lg:grid-rows-2 xl:grid-cols-2 md:grid-row-2 gap-2">
            <About />
            <ExperienceList />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
