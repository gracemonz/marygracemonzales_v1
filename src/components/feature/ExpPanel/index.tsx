import { Typography } from "@/components/base";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@nextui-org/react";
import { Experience } from "src/types/experience";

interface ExpPanelProps extends Experience {}

const ExpPanel = ({
  yearStarted,
  yearEnded,
  jobTitle,
  company,
  client,
  responsibilities,
  keyAchievements,
  technologyUsed,
  isCurrent,
}: ExpPanelProps) => {
  return (
    <div className="group md:flex hover:bg-none cursor-pointer hover:shadow-2xl my-4 py-4 rounded-md hover:transition-all">
      <div className="p-5 max-w-[400]">
        <Typography.SmallText className="text-sm text-white-mantle">
          {yearStarted} - {yearEnded}
        </Typography.SmallText>
      </div>
      <div className="flex-1 p-4">
        <div className="flex">
          <Typography.Subheader className="text-xl capitalize text-white-base group-hover:text-muave">
            {jobTitle}, {company} {client !== undefined && ` · ${client}`}
          </Typography.Subheader>
          <div className="h-4 w-4 mx-4 self-center ">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="group-hover:text-muave"
              size="sm"
            />
          </div>
        </div>
        <div className="my-4">
          <Typography.BodyText className="text-white-crust font-light">
            {responsibilities}
          </Typography.BodyText>
        </div>
        <div className="my-4">
          {technologyUsed.map((tech) => (
            <Chip
              key={tech}
              className="m-1 text-muave"
              color="secondary"
              variant="flat"
            >
              {tech}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpPanel;
