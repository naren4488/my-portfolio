import { useLocation, useParams } from "react-router-dom";
import ProjectDetailsCard from "../../components/ProjectDetailsCard";
import projectDataJSON from "./projectData.json";
import ProjectHeader from "./ProjectHeader";
import sendicon from "./../../assets/narendra/send.svg";
import { useEffect } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import EmbedVideo from "../../components/EmbedVideo";

const ProjectDetails = () => {
  const { pathname } = useLocation();

  const naren = window.location.pathname;

  console.log("naren", naren);
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [pathname]);

  let { projectId } = useParams(); // to get dynamic path details
  const { name, site, github, videoDemo, discription, secondDiscription, mockupImg, webColor } =
    projectDataJSON[projectId].projectMetaData;
  const { projectData } = projectDataJSON[projectId];

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div
      className={`relative box-border  font-light tracking-wide ${webColor}`}
    >
      {/* Navbar */}
      <ProjectHeader webColor={webColor} />

      {/* Project details page */}

      <div className="px-32 pb-10">
        {/* bookmarks sidebar */}
        <div className="fixed top-28 w-[200px] bg-white shadow-lg">
          <NavHashLink key={projectId} to={`${naren}#top`} smooth className="">
            <p
              className={`py-2 break-normal border-b  ring-1 ring-slate-200 border-gray-600 px-4 `}
            >
              {name}
            </p>
          </NavHashLink>
          <NavHashLink
            key={"top"}
            to={`${naren}#overview`}
            smooth
            scroll={(el) => scrollWithOffset(el)}
            className=""
          >
            <p
              className={`py-2 break-normal border-b bg-[#d8ebff] border-gray-600 px-4 `}
            >
              What I Did
            </p>
          </NavHashLink>

          {projectData["features"].map((feature, idx) => {
            return (
              <NavHashLink
                key={feature["heading"]}
                to={`${naren}#${name.toLowerCase()}feature${idx}`}
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className=""
              >
                <p
                  className={`py-2 break-normal border-b border-gray-600 px-4 ${feature["heading"] === "Deployment" && "border-b-0"}`}
                >
                  {feature.heading}
                </p>
              </NavHashLink>
            );
          })}
        </div>

        {/* content section */}
        <div className="pt-24 pr-52 relative left-56">
          {/* hero section */}
          <div className="p-6 bg-white shadow-md ">
            <h1 className="text-4xl mt-1 ">{name}</h1>
            <div className="flex  gap-8 relative">
              <div className=" py-4 w-1/2">
                <p>{discription}</p>
                {secondDiscription && <p className="mt-2">{secondDiscription}</p>}


                <div className="flex gap-8  mt-10 absolute bottom-4 left-0 right-0 ">
                  <p className=" border-b-2 border-black">View Site</p>
                  <p className=" border-b-2 border-black">GitHub Repo</p>
                </div>
              </div>

              <div className="flex-1 border-l border-black pl-4">
                <p className="text-center text-2xl mb-4">Watch Video Demo</p>
                <EmbedVideo videoID={"t1QBSRRhwX8"} />
              </div>
            </div>
          </div>

          {/* overview card */}
          <div id="overview" className="  p-6  mt-6 bg-white shadow-md ">
            <h1 className="text-2xl mb-6 font-normal">What I Did</h1>
            {/* <p className="mb-4">{projectData["Overview"]["subHeading"]}</p> */}
            <p>{projectData["Overview"]["list"]}</p>

            <ul className=" list-disc pl-16 mb-4">
              {projectData["Overview"]["listItems"].map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>
            <div className="flex gap-10">
              {projectData["Overview"]["img"].map((obj, idx) => {
                return (
                  obj.imgURL && (
                    <div key={idx} className=" border border-black w-1/2">
                      <img
                        src={obj.imgURL}
                        alt={obj.imgDisc}
                        className="  h-[290px] object-contain mb-4 shadow-lg ring-1 ring-slate-200"
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
            const myID = `${name.toLowerCase()}feature${idx}`;
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
