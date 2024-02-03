import narendraImg from "/assets/narendraProfile.jpg";
import linkedInIcon from "./../../../assets/logoSVGs/linkedin-square-icon.svg";
import gitHubIcon from "./../../../assets/logoSVGs/github-icon.svg";
import mailIcon from "/assets/icons/mail.svg";
// import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div
      id="about"
      className=" h-fit bg-white px-28 py-20 max-sm:px-6 max-sm:py-16"
    >
      <div className=" flex gap-20 max-sm:flex-col max-sm:gap-12">
        <div className="w-[35%] flex-auto max-sm:w-full">
          <div className=" h-[450px] overflow-hidden max-sm:h-[380px] ">
            <img
              src={narendraImg}
              loading="lazy"
              alt="narendra image"
              className="relative top-8 h-full w-full scale-[1.15] object-cover"
            />
          </div>
        </div>
        <div className="relative w-[65%] flex-auto max-sm:w-full">
          <div className=" pt-10 text-base max-sm:pt-0 max-sm:text-sm ">
            <p className="mb-14 text-justify  max-sm:text-left">
              {`Creating simplistic and functional interfaces on one hand,
              fostering young coders and developers on the other. That’s me in a
              nutshell! I’m a skilled Frontend Developer and a committed tutor,
              having mentored more than 100 students to excel in the tech
              industry.`}
              <br />
              {`In a genuine effort to contribute to the learning community, I
              launched my own Java course - an initiative attended by over 60
              aspiring coders, shaping their futures in this vibrant
              industry.`}
              <br /> <br />{" "}
              {`If you’re looking for a frontend developer, devoted
              to creating seamless user interfaces, knack for breaking down
              complex problems, feel free to connect! Forward is the only way.`}
            </p>
            <div className="absolute bottom-4 right-0 flex  items-center justify-end gap-10 max-sm:static max-sm:gap-6">
              <p className=" ">Connect Here -</p>

              <a
                href="https://www.linkedin.com/in/narendrakajla77/"
                target={`_blank`}
              >
                <img
                  src={linkedInIcon}
                  alt=""
                  className="h-[24px] w-[24px] max-sm:h-[20px] max-sm:w-[20px]"
                />
              </a>
              <a href="mailto:narendrakajla77@gmail.com" target={`_blank`}>
                <img
                  src={mailIcon}
                  alt=""
                  className="h-[24px] w-[24px] max-sm:h-[20px] max-sm:w-[20px]"
                />
              </a>
              <a href="https://github.com/naren4488" target={`_blank`}>
                <img
                  src={gitHubIcon}
                  alt=""
                  className="h-[24px] w-[24px] max-sm:h-[20px] max-sm:w-[20px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
