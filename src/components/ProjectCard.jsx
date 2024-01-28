import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ projectMetaData, reverse, projectpath }) => {
  const {
    name,
    discription,
    techStack,
    site,
    github,
    videoDemo,
    projectInfo,
    secondProjectInfo,
    mockupImg,
    webColor,
  } = projectMetaData;
  return (
    <div>
      <div
        className={`flex justify-between group ${webColor} mb-20 ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className=" p-8 relative flex-1">
          <div className="flex justify-between items-baseline gap-4 pb-6">
            <h1 className="text-3xl ">{name} </h1>
            {/* <div className="pl-3 ">{projectTime}</div> */}
          </div>
          <p className="pb-2 text-justify">{projectInfo}</p>
          <p className="pb-4 text-justify">{secondProjectInfo}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 ">
            {techStack.map((tech) => (
              <p key={tech} className={` bg-gray-200 px-2 py-0.5  text-black`}>
                {tech}
              </p>
            ))}
          </div>
          <div className="flex  justify-between items-baseline  mt-10 absolute bottom-8 left-0 right-0 px-8">
            <div className="flex gap-8">
              <p className=" border-b-2 border-black">View Site</p>
              <p className=" border-b-2 border-black">GitHub Repo</p>
              <p className=" border-b-2 border-black">Video Demo</p>
            </div>
            <Link to={`/project/${projectpath}`}>
              <p className=" border-b-2 border-black ">
                Read More<span className="pl-2 text-lg ">&#10513;</span>
              </p>
            </Link>
          </div>
        </div>
        {/* image column */}
        <div className="">
          <div className="p-8">
            <div className="w-[500px] h-[400px] ">
              <img
                src={mockupImg}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;