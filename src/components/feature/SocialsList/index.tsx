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

// TODO: refactor redirects
const availableSocialPlatforms = {
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
        beatFade
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
  [SocialsEnum.LinkedIn]: (
    <a href="https://www.linkedin.com/in/gracegalanaga/" target="_blank">
      <FontAwesomeIcon
        icon={faLinkedin}
        className="group-hover:text-muave text-flamingo"
      />
    </a>
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
            <li
              key={platform}
              className="group transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-300 h-6 w-6 my-4 cursor-pointer"
            >
              {availableSocialPlatforms[platform]}
            </li>
          ))}
      </ul>
      <div className="w-px h-40 mt-4 bg-flamingo"></div>
    </div>
  );
};

export default SocialList;
