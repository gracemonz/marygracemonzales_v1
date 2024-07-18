import {
  faGithubAlt,
  faGitlab,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export enum SocialsEnum {
  Twitter = "Twitter",
  Github = "Github",
  Gitlab = "Gitlab",
  LinkedIn = "LinkedIn",
}

const availableSocialPlatforms = {
  [SocialsEnum.Twitter]: (
    <FontAwesomeIcon
      icon={faTwitter}
      className="hover:bg-white"
      style={{ color: "#EEBEBE" }}
      size="xl"
    />
  ),
  [SocialsEnum.Github]: (
    <FontAwesomeIcon
      icon={faGithubAlt}
      style={{ color: "#EEBEBE" }}
      size="xl"
      beatFade
    />
  ),
  [SocialsEnum.Gitlab]: (
    <FontAwesomeIcon icon={faGitlab} style={{ color: "#EEBEBE" }} size="xl" />
  ),
  [SocialsEnum.LinkedIn]: (
    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#EEBEBE" }} size="xl" />
  ),
};

interface SocialListProps {
  platforms: (keyof typeof SocialsEnum)[];
}

const SocialList = ({ platforms }: SocialListProps) => {
  return (
    <div className="flex flex-col justify-end items-center">
      <ul className="list-none space-y-5">
        {platforms.length > 0 &&
          platforms.map((platform) => (
            <li key={platform} className="h-6 w-6 my-4 cursor-pointer">
              {availableSocialPlatforms[platform]}
            </li>
          ))}
      </ul>
      <div className="w-px h-40 mt-4 bg-flamingo"></div>
    </div>
  );
};

export default SocialList;
