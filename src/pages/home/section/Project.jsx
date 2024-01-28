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
    <div id="work" className=" px-28  pt-24">
      <h1 className="flex items-center justify-between pb-12 text-4xl">
        <div>My Work</div>
        <div className="text-lg">Hands-on Experience</div>
      </h1>

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
