import htmlLOGO from "./../../../assets/narendra/html.svg";
import csslogo from "./../../../assets/narendra/css.svg";
import jslogo from "./../../../assets/narendra/js.svg";
import reactlogo from "./../../../assets/narendra/react.svg";
import bootstraplogo from "./../../../assets/narendra/bootstrap.svg";
import materiallogo from "./../../../assets/narendra/material.svg";
import tailwindlogo from "./../../../assets/narendra/tailwind.svg";
import gitlogo from "./../../../assets/narendra/git.svg";
import githublogo from "./../../../assets/narendra/github.svg";
import jsonlogo from "./../../../assets/narendra/json.svg";
import restAPILogo from "/assets/icons/rest-api.svg";
import TechSkillsCard from "../../../components/TechSkillsCard";

const Skills = () => {
  return (
    <div className="h-fit px-28 py-10 max-sm:px-8">
      <div className="">
        <h1 className="mb-3 text-4xl font-normal max-sm:text-2xl">
          Tech Stack
        </h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui animi minus nemo dolorem.</p> */}
        {/* skills cols */}

        <div className="flex justify-evenly  py-8 text-center text-xl leading-[56px] ">
          <div className=" flex  flex-col    ">
            <TechSkillsCard logo={htmlLOGO} text={"HTML"} />
            <TechSkillsCard logo={csslogo} text={"CSS"} />
            <TechSkillsCard logo={jslogo} text={"JavaScript"} />
            <TechSkillsCard logo={reactlogo} text={"React"} />
          </div>
          <div className="sm:border-l  sm:border-gray-600"></div>
          <div className=" flex  flex-col  ">
            <TechSkillsCard logo={tailwindlogo} text={"Tailwind"} />
            <TechSkillsCard logo={materiallogo} text={"Material UI"} />
            <TechSkillsCard logo={bootstraplogo} text={"Bootstrap"} />
            <TechSkillsCard logo={jsonlogo} text={"JSON"} />
          </div>
          <div className="sm:border-l  sm:border-gray-600"></div>
          <div className=" flex  flex-col  ">
            <TechSkillsCard logo={gitlogo} text={"Git"} />
            <TechSkillsCard logo={githublogo} text={"GitHub"} />
            <TechSkillsCard logo={restAPILogo} text={"HTTP & REST APIs"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
