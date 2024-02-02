import { useParams } from "react-router-dom";
import ProjectDetailsCard from "../../components/ProjectDetailsCard";
import projectDataJSON from "./projectData.json";
import ProjectHeader from "./ProjectHeader";
import { Link } from "react-scroll";
import EmbedVideo from "../../components/EmbedVideo";
import Bookmarks from "../../components/Bookmarks";
import ProjectDetailsImgCard from "../../components/ProjectDetailsImgCard";

const ProjectDetails = () => {
  let { projectId } = useParams();

  const {
    name,
    site,
    github,
    videoDemo,

    videoId,
    discription,
    secondDiscription,
  } = projectDataJSON[projectId].projectMetaData;
  const { projectData } = projectDataJSON[projectId];

  console.log(videoId);

  return (
    <div
      className={`relative flex justify-start px-28 font-light  tracking-wide max-sm:px-6`}
    >
      {/* Navbar */}
      <ProjectHeader />

      {/* bookmarks */}
      <div className="fixed  right-28 top-24  z-10 w-[280px] max-sm:hidden">
        <p className="mb-2 text-xl">Page Contents</p>
        <div className="flex flex-col border-l border-gray-600">
          <Link
            key={projectId}
            to={`top`}
            activeClass="text-white bg-[#131417]"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <p className={`cursor-pointer break-normal px-4  py-2 `}>{name}</p>
          </Link>
          <Link
            key={`${projectId}overview`}
            to={`overview`}
            activeClass="text-white bg-[#131417]"
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
          >
            <p className={`cursor-pointer break-normal px-4  py-2 `}>
              What I Did
            </p>
          </Link>

          {projectData["features"].map((feature, idx) => {
            return (
              <Link
                key={feature["heading"]}
                to={`${projectId.toLowerCase()}feature${idx}`}
                activeClass="text-white bg-[#131417]"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                <p className={`cursor-pointer break-normal px-4  py-2 `}>
                  {feature.heading}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* bookmark for mobile */}
      <Bookmarks projectId={projectId} name={name} projectData={projectData} />

      {/* Project details page */}
      <div className="w-3/4  pb-80 pt-24 max-sm:w-full">
        {/* hero section */}
        <div
          id="top"
          className="  border-b border-gray-400 bg-white p-6 max-sm:px-0"
        >
          <h1 className="my-1 text-2xl font-normal max-sm:text-xl">{name}</h1>
          <div className="relative flex gap-8 max-sm:flex-col">
            <div className=" w-1/2 pb-4 max-sm:w-full max-sm:text-sm">
              <p>{discription}</p>
              {secondDiscription && <p className="mt-2">{secondDiscription}</p>}

              <div className=" bottom-4  left-0 right-0 mt-10 flex gap-8 max-sm:text-base">
                <a href={site} target={`_blank`}>
                  <p className=" relative border-b-2 border-gray-400  before:absolute  before:-bottom-[1.8px] before:h-full before:w-0 before:border-b-2 before:border-transparent before:transition-all  before:duration-500 hover:cursor-pointer   before:hover:w-full before:hover:border-black">
                    View Site
                  </p>
                </a>

                <a href={github} target={`_blank`}>
                  <p className=" relative border-b-2 border-gray-400  before:absolute  before:-bottom-[1.8px] before:h-full before:w-0 before:border-b-2 before:border-transparent before:transition-all  before:duration-500 hover:cursor-pointer   before:hover:w-full before:hover:border-black">
                    GitHub Repo
                  </p>
                </a>
              </div>
            </div>

            <div className="flex-1 pl-4 max-sm:p-0">
              <EmbedVideo videoID={videoId} />
            </div>
          </div>
        </div>

        {/* overview card */}
        <div id="overview" className="  mt-20  bg-white p-6 max-sm:px-0">
          <h1 className="mb-1 text-2xl font-normal max-sm:text-xl">
            What I Did
          </h1>
          <p className="max-sm:text-sm">{projectData["Overview"]["list"]}</p>
          <ul className=" mb-4 list-disc pl-16 max-sm:pl-6 max-sm:text-sm">
            {projectData["Overview"]["listItems"].map((data, idx) => (
              <li key={idx}>{data}</li>
            ))}
          </ul>
          <div className="flex gap-10 max-sm:flex-col">
            {projectData["Overview"]["img"].map((obj) => {
              return (
                obj.imgURL && (
                  <ProjectDetailsImgCard
                    key={obj.imgDisc}
                    imgURL={obj.imgURL}
                    imgDisc={obj.imgDisc}
                  />
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
              site={site}
              github={github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
