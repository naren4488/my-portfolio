import projectIcon from "./../../../assets/logoSVGs/programmer-computer-icon.svg";
import downloadIcon from "./../../../assets/logoSVGs/import-icon.svg";

const Hero = () => {
  return (
    <div className="flex flex-col bg-white  items-center  pt-52 h-screen text-center relative">
      <h1 className="text-4xl font-bold w-3/4  uppercase">
        Hello, I am Narendra. I am a full-stack developer with 8 years of
        experience. I enjoy building sites & apps. My focus is MERN stack.
      </h1>
      <p className="text-lg  w-4/6  pt-4">
        Our purpose is not mere program execution, but rather the precise
        calibration of individual talents. Through personalized guidance, we
        pave a path that transforms students into prepared professionals.
      </p>
      <div className="pt-10 flex gap-10">
        <button className=" flex items-center justify-center gap-4 border border-black   px-3  py-2 w-[200px]">
          <img src={projectIcon} height={20} width={20} alt="" />{" "}
          <div>View Projects </div>
        </button>
        <button className=" flex items-center justify-center gap-4 border border-black    px-3  py-2 w-[200px]">
          <img src={downloadIcon} height={20} width={20} alt="" />{" "}
          <div>Download Resume</div>
        </button>
       
      </div>
      <div className="pt-48 absolute bottom-8">
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
