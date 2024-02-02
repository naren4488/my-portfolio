/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";
import downShavron from "/assets/icons/cheveron.svg";

const Bookmarks = ({ projectId, name, projectData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(name);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to) => {
    setCurrentContent(to);
  };
  return (
    <div
      className={`fixed right-0  z-10 flex h-[1500px] w-full flex-col items-end border-2 sm:hidden ${isOpen ? "bg-gray-400 bg-opacity-10 backdrop-blur-[2px] backdrop-filter" : ""}`}
    >
      <button
        className="mb-2 mt-16 h-fit min-w-[140px] rounded-l-full bg-black p-3 text-sm text-white shadow-lg"
        onClick={() => handleClick()}
      >
        {isOpen ? (
          <div className="flex items-center gap-2 ">
            <div className="rotate-180 fill-white transition-all duration-200">
              <img src={downShavron} alt="" className="w-[14px]" />
            </div>
            {"Close"}
          </div>
        ) : (
          <div className="flex items-center gap-2 ">
            <div className="fill-white transition-all duration-200">
              <img src={downShavron} alt="" className="w-[16px]" />
            </div>
            {currentContent}
          </div>
        )}
      </button>
      <div className={`  ${isOpen ? "block" : "hidden"} bg-white`}>
        <div className="flex flex-col border-l border-gray-600 text-sm">
          <Link
            key={projectId}
            to={`top`}
            activeClass="text-white bg-[#131417]"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            onSetActive={() => handleSetActive(name)}
          >
            <p className={`cursor-pointer break-normal px-4  py-3 `}>{name}</p>
          </Link>
          <Link
            key={`${projectId}overview`}
            to={`overview`}
            activeClass="text-white bg-[#131417]"
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            onSetActive={() => handleSetActive("What I Did")}
          >
            <p className={`cursor-pointer break-normal px-4  py-3 `}>
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
                onSetActive={() => handleSetActive(feature.heading)}
              >
                <p className={`cursor-pointer break-normal px-4  py-3 `}>
                  {feature.heading}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
