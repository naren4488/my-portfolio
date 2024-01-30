/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";

const Bookmarks = ({ projectId, name, projectData }) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  const handleClick = () => {
    // console.log("btn clicked");
    setIsOpen(!isOpen);
  };
  return (
    <div className={`fixed left-0 top-24 z-10  flex w-[280px]`}>
      <div
        className={`  ${isOpen ? "block" : "hidden"} bg-gray-400 bg-opacity-10 backdrop-blur-sm backdrop-filter`}
      >
        <p className="mb-2 text-xl">Mobile Contents</p>
        <div className="flex flex-col border-l border-gray-600 ">
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
      <button
        className="h-fit bg-black text-white"
        onClick={() => handleClick()}
      >
        {isOpen ? `close` : `open`}
      </button>
    </div>
  );
};

export default Bookmarks;
