import projectIcon from "./../../../assets/logoSVGs/programmer-computer-icon.svg";
import downloadIcon from "./../../../assets/logoSVGs/import-icon.svg";

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center  justify-center   bg-white text-center   ">
      <h1 className="px-48 font-inter text-4xl font-bold uppercase leading-[3rem] max-sm:px-12 max-sm:text-xl 2xl:text-[40px] 2xl:leading-[3.4rem]">
        Hello, I am Narendra. I am a{" "}
        <span className="bg-black px-4 text-white">Frontend Developer</span>{" "}
        with 1 year of experience. I enjoy building sites & apps. Primarily
        focused on <span className="bg-black px-4 text-white">React.js</span>
      </h1>
      <p className="px-52  pt-4 font-inter text-lg max-sm:px-12 max-sm:text-base 2xl:px-64 2xl:pt-8 2xl:text-[24px] 2xl:leading-[36px]">
        Graduating from SIT, Tumkur. I focused more on my coding skills to
        establish a good career in React web development & further. Currently
        working as a freelancer to feed my web crunches.
      </p>
      <div className="flex gap-10 pt-10 max-sm:flex-col 2xl:pt-14 2xl:text-xl">
        <button className=" flex w-[200px] items-center justify-center gap-3 border border-black px-3 py-2 font-inter  2xl:w-[240px] ">
          <img src={projectIcon} height={20} width={20} alt="" />{" "}
          <div>View Projects </div>
        </button>
        <button className=" flex w-[200px] items-center justify-center gap-3 border border-black  px-3  py-2  font-inter 2xl:w-[240px] ">
          <img src={downloadIcon} height={20} width={20} alt="" />{" "}
          <div>Download Resume</div>
        </button>
      </div>
      <div className="mt-16">
        <div className="animate-bounce">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8f3iRMDagr8D6r7jNSHxCK9jtGscdsw6tw&usqp=CAU"
            alt=""
            width={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
