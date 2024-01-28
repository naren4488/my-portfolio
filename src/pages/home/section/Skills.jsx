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

const Skills = () => {
  return (
    <div className="h-fit  px-28 py-10">
      <div className="">
        <h1 className="mb-3 text-4xl">Tech Stack</h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui animi minus nemo dolorem.</p> */}
        {/* skills cols */}
        <div className="flex justify-between py-8 text-center text-xl  leading-[56px]">
          <div className=" flex  flex-1 flex-col items-center">
            <div className="flex w-[134px] items-center  gap-3">
              <img src={htmlLOGO} alt="" height={24} width={24} />
              <p>HTML</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={csslogo} alt="" height={24} width={24} />
              <p>CSS</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={jslogo} alt="" height={24} width={24} />
              <p>JavaScript</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={reactlogo} alt="" height={24} width={24} />
              <p>React</p>
            </div>
          </div>
          <div className="border-l  border-gray-600"></div>
          <div className=" flex  flex-1 flex-col items-center">
            <div className="flex w-[134px] items-center  gap-3">
              <img src={tailwindlogo} alt="" height={24} width={24} />
              <p>Tailwind</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={materiallogo} alt="" height={24} width={24} />
              <p>Material UI</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={bootstraplogo} alt="" height={24} width={24} />
              <p>Bootstrap</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={jsonlogo} alt="" height={24} width={24} />
              <p>JSON</p>
            </div>
          </div>
          <div className="border-l  border-gray-600"></div>
          <div className=" flex  flex-1 flex-col items-center">
            <div className="flex w-[134px] items-center  gap-3">
              <img src={gitlogo} alt="" height={24} width={24} />
              <p>Git</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={githublogo} alt="" height={24} width={24} />
              <p>Github</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={jsonlogo} alt="" height={24} width={24} />
              <p>REST APIs</p>
            </div>
            <div className="flex w-[134px] items-center  gap-3">
              <img src={jsonlogo} alt="" height={24} width={24} />
              <p>HTTP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
