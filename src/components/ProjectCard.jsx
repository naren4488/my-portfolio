/* eslint-disable react/prop-types */

import { HashLink } from "react-router-hash-link";

const ProjectCard = ({ projectMetaData, reverse, projectpath }) => {
  const {
    name,
    techStack,
    site,
    github,
    videoDemo,
    projectId,
    projectInfo,
    secondProjectInfo,
    mockupImg,
    webColor,
  } = projectMetaData;
  return (
    <div
      id={`${projectId}`}
      className={`group mb-20 flex justify-between border border-gray-400 ${
        reverse && "flex-row-reverse"
      } max-sm:flex-col`}
    >
      <div className=" relative flex-1 p-8 text-black max-sm:p-3 max-sm:text-sm">
        <h1 className="pb-6 text-3xl max-sm:pb-3 max-sm:text-xl">{name} </h1>
        <p className="pb-2 text-justify">{projectInfo}</p>
        <p className="pb-4 text-justify">{secondProjectInfo}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 ">
          {techStack.map((tech) => (
            <p key={tech} className={` bg-gray-200 px-2 py-0.5  text-black`}>
              {tech}
            </p>
          ))}
        </div>
        <div className="absolute bottom-8  left-0 right-0  mt-10 flex items-baseline justify-between px-8 max-sm:static max-sm:flex-col max-sm:gap-y-8 max-sm:px-0">
          <div className="flex gap-8 max-sm:gap-6">
            <p className=" border-b-2 border-black">View Site</p>
            <p className=" border-b-2 border-black">GitHub Repo</p>
            <p className=" border-b-2 border-black">Video Demo</p>
          </div>
          <HashLink
            className=""
            to={`/project/${projectpath}/#top`}
            scroll={(el) => {
              const yOffset = -100; // Adjust the offset to your liking
              const y =
                el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "auto" });
            }}
          >
            <p className=" border-b-2 border-black">
              Read More
              <span className="pl-2 text-lg ">&#10513;</span>
            </p>
          </HashLink>
        </div>
      </div>
      {/* image column */}
      <div className="">
        <div className="p-8">
          <div className=" h-[400px] w-[500px] max-sm:h-[220px] max-sm:w-[290px]">
            <img
              src={mockupImg}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
