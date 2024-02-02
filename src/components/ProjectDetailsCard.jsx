/* eslint-disable react/prop-types */
import ProjectDetailsImgCard from "./ProjectDetailsImgCard";

const ProjectDetailsCard = ({ feature, idIndex }) => {
  return (
    <div id={idIndex} className={` mt-20  bg-white p-6 max-sm:px-0`}>
      <h1 className="mb-6 text-2xl font-normal max-sm:text-xl">
        {feature["heading"]}
      </h1>
      <h3 className="mb-1 text-xl text-gray-600 max-sm:text-lg">
        Scope of work
      </h3>
      <ul className=" mb-4 list-disc pl-16 max-sm:pl-6 max-sm:text-sm">
        {feature["scope of work items"].map((data, idx) => {
          if (data) return <li key={idx}>{data}</li>;
        })}
      </ul>
      <h3 className="mb-1 text-xl text-gray-600 max-sm:text-lg">Skills used</h3>
      <p className="mb-4 max-sm:text-sm">{feature["skills"]}</p>

      {feature["img"][0].imgDisc && (
        <h3 className="mb-4 text-xl text-gray-600 max-sm:text-lg">Images</h3>
      )}
      <div className="flex gap-10 max-sm:flex-col">
        {feature["img"].map((obj) => {
          if (obj.imgURL)
            return (
              <ProjectDetailsImgCard
                key={obj.imgDisc}
                imgURL={obj.imgURL}
                imgDisc={obj.imgDisc}
              />
            );
        })}
      </div>
      {feature["heading"] === "Deployment" && (
        <div className="mt-10 flex gap-8 max-sm:text-base">
          <p className=" border-b-2 border-black">View Site</p>
          <p className=" border-b-2 border-black">GitHub Repo</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsCard;
