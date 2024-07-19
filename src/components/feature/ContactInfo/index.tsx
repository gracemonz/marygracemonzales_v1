import { Typography } from "src/components/base";
import SocialList, { SocialsEnum } from "../SocialsList";

const ContactInfo = () => {
  const socials = ["Github", "Gitlab", "LinkedIn", "Twitter"] as SocialsEnum[];

  const handlemMailTo = (event: React.MouseEvent<HTMLParagraphElement>) => {
    window.location.href = "mailto:galanagamarygrace@gmail.com";
    event.preventDefault();
  };
  return (
    <div className="hidden lg:block min-w-16 max-w-32 h-full z-10 fixed top-0 bottom-0 left-0">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col justify-start items-center group">
          <div className="w-px h-20 mb-32 bg-flamingo group-hover:bg-muave"></div>
          <div className="-rotate-90 cursor-pointer">
            <Typography.BodyText className="text-flamingo group-hover:text-secondary">
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
