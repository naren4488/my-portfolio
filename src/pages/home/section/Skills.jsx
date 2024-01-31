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
    <div className="h-fit px-28 py-10 max-sm:px-8">
      <div className="">
        <h1 className="mb-3 text-4xl font-normal max-sm:text-2xl">
          Tech Stack
        </h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui animi minus nemo dolorem.</p> */}
        {/* skills cols */}
        <div className="flex justify-between py-8 text-center text-xl  leading-[56px]">
          <div className=" flex  flex-1 flex-col items-center">
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={htmlLOGO}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">HTML</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={csslogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">CSS</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={jslogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">JavaScript</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={reactlogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">React</p>
            </div>
          </div>
          <div className="border-l  border-gray-600"></div>
          <div className=" flex  flex-1 flex-col items-center">
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={tailwindlogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">Tailwind</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={materiallogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">Material UI</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={bootstraplogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">Bootstrap</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={jsonlogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">JSON</p>
            </div>
          </div>
          <div className="border-l  border-gray-600"></div>
          <div className=" flex  flex-1 flex-col items-center">
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={gitlogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">Git</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={githublogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">Github</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={jsonlogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">REST APIs</p>
            </div>
            <div className="flex w-[134px] items-center gap-3  max-sm:w-fit max-sm:pb-7">
              <div className="h-[24px] w-[24px]">
                <img
                  src={jsonlogo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="max-sm:hidden">HTTP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
