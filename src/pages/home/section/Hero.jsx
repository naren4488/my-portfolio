import projectIcon from "./../../../assets/logoSVGs/programmer-computer-icon.svg";
import downloadIcon from "./../../../assets/logoSVGs/import-icon.svg";

const Hero = () => {
  return (
    <div className="relative flex h-screen  flex-col  items-center bg-white pt-52 text-center">
      <h1 className="w-3/4 text-4xl font-bold  uppercase">
        Hello, I am Narendra. I am a Frontend Developer with 1 years of
        experience. I enjoy building sites & apps. My focus is React.js.
      </h1>
      <p className="w-4/6  pt-4  text-lg">
        Our purpose is not mere program execution, but rather the precise
        calibration of individual talents. Through personalized guidance, we
        pave a path that transforms students into prepared professionals.
      </p>
      <div className="flex gap-10 pt-10">
        <button className=" flex w-[200px] items-center justify-center gap-4 border   border-black  px-3 py-2">
          <img src={projectIcon} height={20} width={20} alt="" />{" "}
          <div>View Projects </div>
        </button>
        <button className=" flex w-[200px] items-center justify-center gap-4 border    border-black  px-3 py-2">
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
