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
    if (hasClient && client.website !== undefined) {
      return client.website;
    }
    if (hasCompany && company.website !== undefined) {
      return company.website;
    }

    return "#";
  };

  return (
    <div className="group/expcard md:flex md:hover:bg-none cursor-pointer md:hover:shadow-2xl md:hover:transition-all my-4 py-4 rounded-md">
      <div className="md:p-5 max-w-[400px]">
        <Typography.SmallText className="text-sm text-white-mantle uppercase font-mono">
          {yearStarted} - {isCurrent && "Present"} {!isCurrent && yearEnded}
        </Typography.SmallText>
      </div>
      <div className="flex-1 md:p-4">
        <a href={handleWeblink()} target="_blank" className="flex">
          <Typography.Subheader className="lg:text-xl capitalize text-white-base group-hover/expcard:text-muave">
            {jobTitle}, {company.name} {hasClient && ` · ${client.name}`}
          </Typography.Subheader>
          <p className="h-4 w-4 mx-4 self-center">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="group-hover/expcard:text-muave"
              size="sm"
            />
          </p>
        </a>
        <div className="my-4">
          <Typography.BodyText className="text-white-crust font-light">
            {responsibilities}
          </Typography.BodyText>
        </div>
        <div className="flex gap-4">
          {hasProjectList &&
            projects.map((project) => (
              <div
                key={project.name}
                className="my-2 group/project hover:text-muave"
              >
                <a
                  href={project.website || "#"}
                  target="_blank"
                  className="flex items-center"
                >
                  <p className="h-3.5 w-3.5 mr-2">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="group-hover/project:text-muave text-white-base"
                      size="xs"
                    />
                  </p>
                  <Typography.SmallText>{project.name}</Typography.SmallText>
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
