import {
  faGithubAlt,
  faGitlab,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export enum SocialsEnum {
  Twitter = "Twitter",
  Github = "Github",
  Gitlab = "Gitlab",
  LinkedIn = "LinkedIn",
}

// TODO: refactor redirects
const availableSocialPlatforms = {
  [SocialsEnum.LinkedIn]: (
    <a href="https://www.linkedin.com/in/gracegalanaga/" target="_blank">
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className="group-hover:text-muave text-flamingo"
      />
    </a>
  ),
  [SocialsEnum.Twitter]: (
    <a href="https://x.com/thegreecepotato" target="_blank">
      <FontAwesomeIcon
        icon={faTwitter}
        className="group-hover:text-muave text-flamingo"
      />
    </a>
  ),
  [SocialsEnum.Github]: (
    <a href="https://github.com/gracemonz" target="_blank">
      <FontAwesomeIcon
        icon={faGithubAlt}
        className="group-hover:text-muave text-flamingo"
      />
    </a>
  ),
  [SocialsEnum.Gitlab]: (
    <a href="https://gitlab.com/moshimanju" target="_blank">
      <FontAwesomeIcon
        icon={faGitlab}
        className="group-hover:text-muave text-flamingo"
      />
    </a>
  ),
};

interface SocialListProps {
  platforms: (keyof typeof SocialsEnum)[];
  position?: "vertical" | "horizontal";
}

const SocialList = ({ platforms, position = "vertical" }: SocialListProps) => {
  const verticalStyle = "space-y-4";
  const horizontalStyle = "space-x-6 flex flex-row justify-start";
  const isVertical = position === "vertical";

  return (
    <div
      className={`flex flex-col ${isVertical ? "items-center" : "items-start"}`}
    >
      <ul
        className={`list-none ${isVertical ? verticalStyle : horizontalStyle}`}
      >
        {platforms.length > 0 &&
          platforms.map((platform) => (
            <li
              key={platform}
              className="group transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-300 h-6 w-6 cursor-pointer"
            >
              {availableSocialPlatforms[platform]}
            </li>
          ))}
      </ul>
      {position === "vertical" && (
        <div className="w-px h-40 mt-4 bg-flamingo"></div>
      )}
    </div>
  );
};

export default SocialList;
