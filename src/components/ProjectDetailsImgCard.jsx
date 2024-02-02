/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const ProjectDetailsImgCard = ({ imgDisc, imgURL }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  console.log(isZoomed);
  useEffect(() => {
    if (window.innerWidth > 640) {
      if (isZoomed) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isZoomed]);
  const handleZoom = () => {
    if (window.innerWidth > 640) {
      setIsZoomed(!isZoomed);
    }
  };
  return (
    <div key={imgDisc} className="w-1/2 max-sm:w-full ">
      <div
        className={`h-[290px] w-full transition-all duration-100 max-sm:h-[220px]  ${isZoomed ? " sm:cursor-zoom-out" : " sm:cursor-zoom-in sm:hover:bg-gray-50 sm:hover:brightness-75"}`}
      >
        <div
          onClick={() => handleZoom()}
          className={`h-full w-full  ${isZoomed ? "fixed left-0 top-0 z-[1500] flex items-center justify-center  bg-gray-600 bg-opacity-50 backdrop-blur-[2px] backdrop-filter" : "static"}`}
        >
          <img
            src={imgURL}
            alt={imgDisc}
            className={` object-contain  ring-slate-200   ${isZoomed ? "h-[85%] w-[85%] ring-0" : " h-full w-full shadow-lg ring-1"}`}
          />
        </div>
      </div>
      <p className="mt-4 text-center max-sm:text-sm">{imgDisc}</p>
    </div>
  );
};

export default ProjectDetailsImgCard;
