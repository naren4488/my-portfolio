import { useParams } from "react-router-dom";
import naren from "./../../assets/logoSVGs/nk.png";
import { HashLink } from "react-router-hash-link";

// eslint-disable-next-line react/prop-types
const ProjectHeader = () => {
  let { projectId } = useParams();

  return (
    <header className="fixed left-0 top-4 z-10 h-16 w-full  px-28 backdrop-blur-none">
      <div
        className={`group flex w-full items-center justify-between border border-black bg-white px-8  py-1  hover:shadow-lg`}
      >
        <div>
          <HashLink to={`/#top`} smooth>
            <img
              className="scale-[2] text-4xl"
              src={naren}
              height={40}
              width={40}
            />
          </HashLink>
        </div>
        <div className="flex gap-12 ">
          <HashLink
            to={`/#${projectId}`}
            scroll={(el) => {
              const yOffset = -100;
              const y =
                el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            <p className="hover:underline">{`< Back`}</p>
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
