import naren from "./../../assets/logoSVGs/nk.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectHeader = ({webColor}) => {
  return (
    <header className="fixed top-4 px-28 w-full h-16  z-10 backdrop-blur-none">
      <div className={`flex justify-between items-center py-1 px-8 bg-[#f1f8ff]  border group border-black  w-full  hover:shadow-lg`}>
        <div>
          <img
            className="text-4xl scale-[2]"
            src={naren}
            height={40}
            width={40}
          />
        </div>
        <div className="flex gap-12 ">
          <Link to={'/'}><p className="hover:underline">{`< Back`}</p></Link>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
