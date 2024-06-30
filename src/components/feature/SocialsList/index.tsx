import GithubIcon from "src/svg/Github"
import GitlabIcon from "src/svg/Gitlab"
import LinkedInIcon from "src/svg/LinkedIn"
import TwitterIcon from "src/svg/Twitter"


export enum SocialsEnum {
  Twitter = 'Twitter',
  Github = 'Github',
  Gitlab = 'Gitlab',
  LinkedIn = 'LinkedIn'
}

const availableSocialPlatforms = {
  [SocialsEnum.Twitter]: <TwitterIcon />,
  [SocialsEnum.Github]: <GithubIcon />,
  [SocialsEnum.Gitlab]: <GitlabIcon />,
  [SocialsEnum.LinkedIn]: <LinkedInIcon />
}


interface SocialListProps {
  platforms: (keyof typeof SocialsEnum)[]
}

const SocialList = ({platforms}:SocialListProps) => {

  return (
    <div className="flex flex-col justify-end items-center">
      <ul className="list-none space-y-5">
        {platforms.length > 0 && (
          platforms.map((platform) => <li key={platform}>
            {availableSocialPlatforms[platform] || null}
          </li>)
        )}
      </ul>
      <div className="w-px h-40 mt-4 bg-flamingo"></div>
    </div>

  )
}

export default SocialList
