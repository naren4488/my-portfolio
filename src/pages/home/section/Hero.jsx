import projectIcon from "./../../../assets/logoSVGs/programmer-computer-icon.svg";
import downloadIcon from "./../../../assets/logoSVGs/import-icon.svg";

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center  justify-center   bg-white text-center   ">
      <h1 className="px-48 font-inter text-4xl font-bold uppercase leading-[3rem] max-sm:px-6 max-sm:text-base 2xl:text-[40px] 2xl:leading-[3.4rem]">
        Hello, I am Narendra. I am a{" "}
        <span className="bg-black px-4 text-white max-sm:px-3">
          Frontend Developer
        </span>{" "}
        with 1 year of experience. I enjoy building sites & apps. Primarily
        focused on{" "}
        <span className="bg-black px-4 text-white max-sm:px-3">React.js</span>
      </h1>
      <p className="px-52  pt-4 font-inter text-lg max-sm:px-12 max-sm:text-sm 2xl:px-64 2xl:pt-8 2xl:text-[24px] 2xl:leading-[36px]">
        Graduating from SIT, Tumkur. I focused more on my coding skills to
        establish a good career in React web development & further. Currently
        working as a freelancer to feed my web crunches.
      </p>
      <div className="flex gap-10  pt-10 max-sm:flex-col max-sm:gap-6 max-sm:text-sm 2xl:pt-14 2xl:text-xl">
        <button className=" flex w-[200px] items-center justify-center gap-3 border border-black px-3 py-2  font-inter max-sm:w-[180px]   2xl:w-[240px] ">
          <div className="h-[20px] w-[20px] max-sm:h-[16px] max-sm:w-[16px]">
            <img src={projectIcon} className="h-full w-full" alt="" />{" "}
          </div>
          <div>View Projects </div>
        </button>
        <button className=" flex w-[200px] items-center justify-center gap-3 border border-black px-3  py-2   font-inter  max-sm:w-[180px]  2xl:w-[240px] ">
          <div className="h-[20px] w-[20px] max-sm:h-[16px] max-sm:w-[16px]">
            <img src={downloadIcon} className="h-full w-full" alt="" />{" "}
          </div>
          <div>Download Resume</div>
        </button>
      </div>
      <div className="mt-16 max-sm:mt-28">
        <div className="w-[50px] animate-bounce max-sm:w-[36px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8f3iRMDagr8D6r7jNSHxCK9jtGscdsw6tw&usqp=CAU"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
