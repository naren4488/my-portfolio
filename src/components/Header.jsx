import naren from "./../assets/logoSVGs/nk.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="fixed top-4 z-10 h-16 w-full px-28">
      {/* hover:backdrop-blur-sm hover:bg-black hover:text-white */}
      <div className="group flex w-full items-center justify-between border  border-black bg-white px-8  py-1  hover:shadow-lg">
        <div>
          <HashLink
            to={`/#top`}
            smooth
            // scroll={(el) => {
            //   const yOffset = -100; // Adjust the offset to your liking
            //   const y =
            //     el.getBoundingClientRect().top + window.scrollY + yOffset;
            //   window.scrollTo({ top: y, behavior: "smooth" });
            // }}
          >
            <img
              className="scale-[2] text-4xl"
              src={naren}
              height={40}
              width={40}
            />
          </HashLink>
        </div>
        <div className="flex gap-12 ">
          <HashLink to={"/#about"} smooth className="hover:underline">
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
