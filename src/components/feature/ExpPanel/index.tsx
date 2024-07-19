import { Typography } from "@/components/base";
import { faLink, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
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
  projects,
  keyAchievements,
  technologyUsed,
  isCurrent,
}: ExpPanelProps) => {
  const hasClient = client !== undefined;
  const hasCompany = company !== undefined;
  const hasProjectList = projects !== undefined && projects?.length > 0;

  const handleWeblink = (): string => {
    if (hasClient) {
      return client.website || "";
    }
    if (hasCompany) {
      return company.website || "";
    }

    return "#";
  };

  return (
    <div className="group md:flex hover:bg-none cursor-pointer hover:shadow-2xl my-4 py-4 rounded-md hover:transition-all">
      <div className="p-5 max-w-[400]">
        <Typography.SmallText className="text-sm text-white-mantle uppercase font-mono">
          {yearStarted} - {isCurrent && "Present"} {!isCurrent && yearEnded}
        </Typography.SmallText>
      </div>
      <div className="flex-1 p-4">
        <div className="flex">
          <a href={handleWeblink()} target="_blank">
            <Typography.Subheader className="text-xl capitalize text-white-base group-hover:text-muave">
              {jobTitle}, {company.name} {hasClient && ` · ${client.name}`}
            </Typography.Subheader>
          </a>
          <div className="h-4 w-4 mx-4 self-start">
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
        <div className="flex gap-4">
          {hasProjectList &&
            projects.map((project) => (
              <div key={project.name} className="my-2">
                <a
                  href={project.website}
                  target="_blank"
                  className="flex items-center  group-hover:text-muave"
                >
                  <p className="h-3.5 w-3.5 mr-2">
                    <FontAwesomeIcon
                      icon={faLink}
                      className=" group-hover:text-muave text-white-base"
                      size="xs"
                    />
                  </p>
                  <Typography.BodyText>{project.name}</Typography.BodyText>
                </a>
              </div>
            ))}
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
