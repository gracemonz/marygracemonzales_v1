import { Typography } from "src/components/base";
import SocialList, { SocialsEnum } from "../SocialsList";

const ContactInfo = () => {
  const socials = ["Github", "Gitlab", "LinkedIn", "Twitter"] as SocialsEnum[];
  return (
    <div className="hidden lg:block min-w-16 max-w-32 h-full z-10 fixed top-0 bottom-0 left-0">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col justify-start items-center">
          <div className="w-px h-20 mb-32 bg-flamingo"></div>
          <div className="-rotate-90">
            <Typography.BodyText className="text-flamingo">
              galanagamarygrace@gmail.com
            </Typography.BodyText>
          </div>
        </div>
        <SocialList platforms={socials} />
      </div>
    </div>
  );
};

export default ContactInfo;
