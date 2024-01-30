import Accordion from "../../../components/Accordion";

const Experience = () => {
  return (
    <div className="h-fit w-full bg-[#131417] px-28 py-10 text-white max-sm:px-8">
      <h1 className="my-10 text-4xl">My Experience</h1>
      {/* accordion box */}
      <div className="px-24 max-sm:px-0">
        <div className="m-auto w-full  p-4 max-sm:p-0">
          <Accordion
            id="1"
            title="4U Academy"
            role="Web developer & Tutor"
            duration="Dec,2021 - present"
            answer={[
              "Lead the team of 5 including web-designer, intern & tutors.",
              "Mentored 100+ students at 4U Academy.",
              "Responsible for tutoring Java to 60+ students throughout the period.",
              "Improved the website's performance, accessibility & responsiveness.",
            ]}
          />
          <Accordion
            id="2"
            title="Urban Biotix"
            role="Web developer & Co-founder"
            duration="Aug,2022 - Dec,2022"
            answer={[
              "Initiated the Go-Green slogan to be a reality in Jaipur urban areas. Raised 7 lac funding with co-founders at JECRC Inclubation Center form state government.",
              "30+ successfull rooftop garden projects throughout the span of 4 months",
            ]}
          />
          <Accordion
            id="3"
            title="Crio Fellowship Program in Software Development"
            role="Learner"
            duration="March, 2023 - Jan, 2024"
            answer={[
              "Followed the path of 'learn by building' to ascertain & achieve my interest in frontend development. ",
              "Mastered core frontend development skills like HTML, CSS, JavaScript & React and built real-time industry project including e-commerce & travel-booking web apps.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
