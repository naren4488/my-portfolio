import naren from "./../../assets/logoSVGs/nk.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectHeader = () => {
  return (
    <header className="fixed left-0 top-4 z-10 h-16 w-full  px-28 backdrop-blur-none">
      <div
        className={`group flex w-full items-center justify-between border border-black bg-white px-8  py-1  hover:shadow-lg`}
      >
        <div>
          <img
            className="scale-[2] text-4xl"
            src={naren}
            height={40}
            width={40}
          />
        </div>
        <div className="flex gap-12 ">
          <Link to={"/"}>
            <p className="hover:underline">{`< Back`}</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
