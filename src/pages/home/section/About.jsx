import narendraImg from "./../../../assets/logoSVGs/narendra.jpeg";
import linkedInIcon from "./../../../assets/logoSVGs/linkedin-square-icon.svg";
import gitHubIcon from "./../../../assets/logoSVGs/github-icon.svg";

const About = () => {
  return (
    <div id="about" className=" h-fit bg-white px-28 py-20 ">
      <div className=" flex gap-20 ">
        <div className=" ">
          <div className="h-[450px] w-[400px]  overflow-hidden ">
            <img
              src={narendraImg}
              alt="narendra image"
              className="relative top-8 h-full w-full scale-[1.15] object-cover"
            />
          </div>
        </div>
        <div className=" relative flex-1 ">
          <div className="pt-10 ">
            <p className="mb-14 text-justify text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              modi ipsam doloribus soluta, similique veniam iste nostrum,
              sapiente est quasi cupiditate quos ratione magnam animi libero
              consequuntur. <br /> <br /> Vero, debitis voluptas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Exercitationem aut
              enim asperiores quod fugiat
            </p>
            <div className="absolute bottom-4 right-0 flex  items-center justify-end gap-10">
              <p className=" text-xl">Connect Here -</p>
              <img src={linkedInIcon} alt="" height={24} width={24} />
              <img src={linkedInIcon} alt="" height={24} width={24} />
              <img src={gitHubIcon} alt="" height={24} width={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
