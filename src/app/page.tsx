import MovingBackground from "@/components/feature/MovingBackground";
import { NextUIProvider } from "@nextui-org/system";
import { Typography } from "src/components/base";
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
          <About />
        </div>
      </div>
    </NextUIProvider>
  );
}
