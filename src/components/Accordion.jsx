/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, answer, role, duration }) => {
  // console.log(answer)
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full text-xl border border-white py-4 pl-4  ${accordionOpen && '!border-b-0 bg-white text-black'}`}
      >
        <div className=" flex-1 text-left">
          <span className="pr-3 ">{title}</span> |{" "}
          <span className="px-3">{role}</span> |{" "}
          <span className="pl-3">{duration}</span>
        </div>
        <div className={`w-[150px] border-l  border-white ${accordionOpen && '!border-black'}`}>{accordionOpen ? <span>Hide</span> : <span>Expand</span>}</div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-base">
          <ul className={`list-disc  bg-[#131417]  text-white text-xl  border border-white border-t-0 py-4 pl-12 font-sans font-light tracking-wide`}>
            {answer.map((data, idx) => (
              <li className="pb-3" key={idx}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
