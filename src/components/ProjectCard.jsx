/* eslint-disable react/prop-types */

import { HashLink } from "react-router-hash-link";
import readMoreArrow from "/assets/icons/read-more.svg";
import { useState, useEffect } from "react";

const ProjectCard = ({ projectMetaData, reverse, projectpath }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      if (isZoomed) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isZoomed]);
  const handleZoom = () => {
    if (window.innerWidth > 640) {
      setIsZoomed(!isZoomed);
    }
  };

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
              const yOffset = -100;
              const y =
                el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "auto" });
            }}
          >
            <div className=" flex items-center border-b-2 border-black">
              Read More
              <div className="h-[20px] w-[20px]   max-sm:h-[] max-sm:w-[]">
                <img src={readMoreArrow} alt="" className="w-full" />
              </div>
            </div>
          </HashLink>
        </div>
      </div>
      {/* image column */}
      <div className="">
        <div className="p-8">
          <div
            className={` h-[400px] w-[500px]  max-sm:h-[220px] max-sm:w-[290px] `}
          >
            <div
              className={`h-full w-full  ${isZoomed ? "fixed left-0 top-0 z-[200] bg-gray-400 bg-opacity-50 backdrop-blur-[2px] backdrop-filter" : "static"}`}
            >
              <img
                src={mockupImg}
                onClick={() => handleZoom()}
                alt="mockup-img"
                className={`h-full w-full  object-contain transition-all duration-200   ${isZoomed ? "sm:cursor-zoom-out " : "sm:cursor-zoom-in sm:hover:brightness-75"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
