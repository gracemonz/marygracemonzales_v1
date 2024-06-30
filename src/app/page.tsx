import { Typography } from "src/components/base";
import Container from "src/components/feature/Container";
import MainBanner from "src/components/feature/MainBanner";
import SocialList, { SocialsEnum } from "src/components/feature/SocialsList";



export default function Home () {

  const socials = ['Github', 'Gitlab', 'LinkedIn','Twitter'] as SocialsEnum[]

  return (
   <Container>
    {/* floating SNS */}
    <div className="flex h-full">
      <div className="hidden lg:block max-w-80 w-80 min-w-40">
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col justify-start items-center">
            <div className="w-px h-20 mb-32 bg-flamingo"></div>
            <div className="-rotate-90">
              <Typography.BodyText className="text-flamingo">galanagamarygrace@gmail.com</Typography.BodyText></div>
          </div>
          <SocialList platforms={socials} />
        </div>
      </div>
      <MainBanner></MainBanner>
      <div className="hidden lg:block max-w-80 w-80 min-w-40"></div>
    </div>

    </Container>
  )
}
