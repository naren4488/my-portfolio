/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, answer, role, duration }) => {
  // console.log(answer)
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex w-full justify-between border border-white py-3 pl-4 text-xl  max-sm:pl-2 max-sm:text-sm  ${accordionOpen && "!border-b-0 bg-white text-black"}`}
      >
        <div className=" flex-1 text-left max-sm:flex max-sm:flex-col">
          <span className="pr-3 max-sm:p-1">{title}</span>{" "}
          <span
            className={`border-r border-gray-500  max-sm:border-b ${accordionOpen && "!border-black"}`}
          ></span>
          <span
            className={`px-3 text-gray-400 max-sm:p-1 ${accordionOpen && "!text-gray-600"}`}
          >
            {role}
          </span>{" "}
          <span
            className={`border-r border-gray-500  ${accordionOpen && "!border-black"}`}
          ></span>
          <span
            className={`pl-3 text-gray-400 max-sm:px-1 max-sm:text-xs ${accordionOpen && "!text-gray-600"}`}
          >
            {duration}
          </span>
        </div>
        <div
          className={`w-[150px] border-l border-white  max-sm:w-[90px] ${accordionOpen && "!border-black"}`}
        >
          {accordionOpen ? <span>Hide</span> : <span>Know More</span>}
        </div>
      </button>
      <div
        className={`grid overflow-hidden  text-slate-600 transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
          <ul
            className={`list-disc  border  border-t-0 border-white  bg-[#131417] py-4 pl-12 font-sans text-xl font-light tracking-wide text-white max-sm:pl-8 max-sm:text-sm`}
          >
            {answer.map((data, idx) => (
              <li className="pb-3" key={idx}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
