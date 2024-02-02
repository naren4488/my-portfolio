/* eslint-disable react/prop-types */
const TechSkillsCard = ({ logo, text }) => {
  return (
    <div className="flex w-full items-center justify-start gap-3 max-sm:w-fit  max-sm:pb-7 ">
      <div className="h-[24px] w-[24px]">
        <img src={logo} alt="" className="h-full w-full object-contain" />
      </div>
      <p className="max-sm:hidden">{text}</p>
    </div>
  );
};

export default TechSkillsCard;
