import projectIcon from "./../../../assets/logoSVGs/programmer-computer-icon.svg";
import downloadIcon from "./../../../assets/logoSVGs/import-icon.svg";

const Hero = () => {
  return (
    <div className="relative flex h-screen  flex-col  items-center bg-white pt-52 text-center">
      <h1 className="w-3/4 font-inter text-4xl font-bold uppercase leading-[3rem]">
        Hello, I am Narendra. I am a{" "}
        <div className="border-b border-black">Frontend Developer</div> with 1
        year of experience. I enjoy building sites & apps. Primarily focused on{" "}
        <span className="border-b border-black">React.js</span>
      </h1>
      <p className="w-4/6  pt-4 font-inter text-lg">
        Graduating from SIT, Tumkur. I focused more on my coding skills to
        establish a good career in React web development & further. Currently
        working as a freelancer to feed my web crunches.
      </p>
      <div className="flex gap-10 pt-10">
        <button className=" flex w-[200px] items-center justify-center gap-3 border border-black px-3 py-2  font-inter ">
          <img src={projectIcon} height={20} width={20} alt="" />{" "}
          <div>View Projects </div>
        </button>
        <button className=" flex w-[200px] items-center justify-center gap-3 border  border-black  px-3  py-2 font-inter ">
          <img src={downloadIcon} height={20} width={20} alt="" />{" "}
          <div>Download Resume</div>
        </button>
      </div>
      <div className="absolute bottom-8 pt-48">
        <div className=" animate-bounce">
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
