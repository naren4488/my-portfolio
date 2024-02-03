import naren from "./../assets/logoSVGs/nk.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="fixed top-4 z-[1111] h-16 w-full px-28 max-sm:px-6">
      <div className="flex  items-center justify-between border  border-black bg-white px-8  py-1  hover:shadow-lg max-sm:px-3">
        <div>
          <HashLink to={`/#top`} smooth>
            <div className="h-[40px] w-[40px] max-sm:h-[30px] max-sm:w-[30px]">
              <img className="h-full w-full scale-[2]" src={naren} />
            </div>
          </HashLink>
        </div>
        <div className="flex gap-12 max-sm:gap-6 max-sm:text-sm">
          <HashLink to={"/#about"} smooth className="  hover:underline">
            About
          </HashLink>
          <HashLink to={"/#work"} smooth className="hover:underline">
            My work
          </HashLink>
          <HashLink to={"/#contact"} smooth className="hover:underline">
            Contact
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
