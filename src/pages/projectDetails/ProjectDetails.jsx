import { useLocation, useParams } from "react-router-dom";
import ProjectDetailsCard from "../../components/ProjectDetailsCard";
import projectDataJSON from "./projectData.json";
import ProjectHeader from "./ProjectHeader";
import { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import EmbedVideo from "../../components/EmbedVideo";

const ProjectDetails = () => {
  const { pathname } = useLocation();
  const naren = window.location.pathname;
  let { projectId } = useParams(); // to get dynamic path details

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [pathname]);

  const {
    name,
    site,
    github,
    videoDemo,
    discription,
    secondDiscription,
    webColor,
  } = projectDataJSON[projectId].projectMetaData;
  const { projectData } = projectDataJSON[projectId];

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div
      className={`relative flex justify-start px-28  font-light tracking-wide`}
    >
      {/* Navbar */}
      <ProjectHeader webColor={webColor} />

      {/* bookmarks sidebar */}
      <div className="fixed  right-28 top-24  w-[280px] ">
        <p className="mb-2 text-xl">Page Contents</p>
        <div className=" border-l border-gray-600">
          <NavHashLink key={projectId} to={`${naren}#top`} smooth className="">
            <p className={`break-normal px-4 pb-2 underline  `}>{name}</p>
          </NavHashLink>
          <NavHashLink
            key={"top"}
            to={`${naren}#overview`}
            smooth
            scroll={(el) => scrollWithOffset(el)}
            className=""
          >
            <p className={`break-normal px-4 py-2 underline `}>What I Did</p>
          </NavHashLink>
          {projectData["features"].map((feature, idx) => {
            return (
              <NavHashLink
                key={feature["heading"]}
                to={`${naren}#${projectId.toLowerCase()}feature${idx}`}
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className=""
              >
                <p className={`break-normal px-4 py-2 underline`}>
                  {feature.heading}
                </p>
              </NavHashLink>
            );
          })}
        </div>
      </div>

      {/* Project details page */}
      <div className="w-3/4  pb-10 pt-24">
        <div className="">
          {/* hero section */}
          <div className="  border-b border-gray-400 bg-white p-6">
            <h1 className="my-1  text-2xl font-normal">{name}</h1>
            <div className="relative flex gap-8">
              <div className=" w-1/2 pb-4">
                <p>{discription}</p>
                {secondDiscription && (
                  <p className="mt-2">{secondDiscription}</p>
                )}

                <div className="absolute bottom-4  left-0 right-0 mt-10 flex gap-8 ">
                  <p className=" border-b-2 border-black">View Site</p>
                  <p className=" border-b-2 border-black">GitHub Repo</p>
                </div>
              </div>

              <div className="flex-1 pl-4">
                {/* <p className="mb-4 text-center text-2xl">Watch Video Demo</p> */}
                <EmbedVideo videoID={"t1QBSRRhwX8"} />
              </div>
            </div>
          </div>

          {/* <div className="m-auto mt-8 w-1/2 border border-gray-400"></div> */}
          {/* overview card */}
          <div id="overview" className="  mt-6  bg-white p-6 ">
            <h1 className="mb-1 text-2xl font-normal">What I Did</h1>
            <p>{projectData["Overview"]["list"]}</p>
            <ul className=" mb-4 list-disc pl-16">
              {projectData["Overview"]["listItems"].map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>
            <div className="flex gap-10">
              {projectData["Overview"]["img"].map((obj, idx) => {
                return (
                  obj.imgURL && (
                    <div key={idx} className=" w-1/2 ">
                      <img
                        src={obj.imgURL}
                        alt={obj.imgDisc}
                        className="  mb-4 h-[290px] object-contain shadow-lg ring-1 ring-slate-200"
                      />
                      <p className="text-center">{obj.imgDisc}</p>
                    </div>
                  )
                );
              })}
            </div>
          </div>

          {/* features */}
          {projectData["features"].map((feature, idx) => {
            const myID = `${projectId}feature${idx}`;
            return (
              <ProjectDetailsCard
                key={feature["heading"]}
                idIndex={myID}
                feature={feature}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
