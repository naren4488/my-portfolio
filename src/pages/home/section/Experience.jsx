import Accordion from "../../../components/Accordion";

const Experience = () => {
  return (
    <div className="h-fit w-full py-10 px-28 bg-[#131417] text-white">
      <h1 className="text-4xl my-10">My Experience</h1>
      {/* accordion box */}
      <div className="px-24">
        <div className="p-4 w-full    m-auto">
          <Accordion
            id="1"
            title="4U Academy"
            role="Web developer & Tutor"
            duration="Dec,2021 - present"
            answer={[
              "Hello world  =i am building my portfolio i am enjoying accordion here lorem=i am building my portfolio i am enjoying accordion here lorem",
              "bye-bye =i am building my portfolio i am enjoying accordion here lorem",
              "html is good =i am building my portfolio i am enjoying accordion here lorem=i am building my portfolio i am enjoying accordion here lorem",
            ]}
          />
          <Accordion
            id="2"
            title="Urban Biotix"
            role="Web developer & Co-founder"
            duration="Aug,2022 - Dec,2022"
            answer={["hello", "bye-bye", "html is good"]}
          />
          <Accordion
            id="3"
            title="Freelancing"
            role="Web developer"
            duration="Oct, 2023 - present"
            answer={["hello", "bye-bye", "html is good"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
