import { Typography } from "@/components/base";
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
    <div className="md:flex hover:bg-none cursor-pointer hover:shadow-2xl my-4 py-4 rounded-md hover:transition-all">
      <div className="p-5 max-w-[400]">
        <Typography.SmallText className="text-sm text-white-mantle">
          {yearStarted} - {yearEnded}
        </Typography.SmallText>
      </div>
      <div className="flex-1 p-4">
        <div>
          <Typography.Subheader className="text-xl capitalize text-white-base">
            {jobTitle}, {company} {client !== undefined && ` · ${client}`}
          </Typography.Subheader>
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
              className="m-1 text-maroon"
              color="primary"
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
