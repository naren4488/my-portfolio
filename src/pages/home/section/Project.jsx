import projectDataJSON from "./../../../pages/projectDetails/projectData.json";
import ProjectCard from "./../../../components/ProjectCard";

const Project = () => {
  const projects = [
    { websiteName: "qkart", color: "bg-[#8FE070]/25" },
    { websiteName: "qtrip", color: "bg-[#7F3E0A]/20" },
    { websiteName: "4uacademy", color: "bg-[#f0f8ff]" },
    { websiteName: "kdevents", color: "bg-[#F5F8FD]" },
  ];

  return (
    <div id="work" className=" px-28 pt-24 max-sm:px-6">
      <div className="flex items-center justify-between pb-12 font-inter  max-sm:text-2xl">
        <div className="text-4xl font-normal max-sm:text-2xl">My Work</div>
        <div className="text-lg max-sm:text-xs">Hands-on Experience</div>
      </div>

      {projects.map((project, idx) => (
        <ProjectCard
          key={project.websiteName}
          btnColor="bg-[#5A555B]"
          reverse={idx % 2 !== 0}
          projectpath={project.websiteName}
          projectMetaData={
            projectDataJSON[project.websiteName]["projectMetaData"]
          }
        />
      ))}
    </div>
  );
};

export default Project;
