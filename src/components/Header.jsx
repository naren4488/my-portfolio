import { Link } from "react-router-dom";
import naren from "./../assets/logoSVGs/nk.png";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="fixed top-4 px-28 w-full h-16  z-10 ">
      {/* hover:backdrop-blur-sm hover:bg-black hover:text-white */}
      <div className="flex justify-between items-center py-1 px-8 bg-white  border group border-black  w-full  hover:shadow-lg">
        <div>
          <img
            className="text-4xl scale-[2]"
            src={naren}
            height={40}
            width={40}
          />
        </div>
        <div className="flex gap-12 ">
          <HashLink to={'/#about'} smooth className="hover:underline">About</HashLink>
          <HashLink to={'/#work'} smooth className="hover:underline">My work</HashLink>
          <HashLink to={'/#contact'} smooth className="hover:underline">Contact</HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
