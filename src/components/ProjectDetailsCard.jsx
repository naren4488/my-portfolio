/* eslint-disable react/prop-types */
const ProjectDetailsCard = ({ feature, idIndex }) => {
  return (
    <div id={idIndex} className={`relative mt-6  bg-white p-6 `}>
      <h1 className="mb-6 text-2xl font-normal">{feature["heading"]}</h1>
      <h3 className="mb-1 text-xl text-gray-600">Scope of work</h3>
      <ul className=" mb-4 list-disc pl-16">
        {feature["scope of work items"].map((data, idx) => {
          if (data) return <li key={idx}>{data}</li>;
        })}
      </ul>
      <h3 className="mb-1 text-xl text-gray-600">Skills used</h3>
      <p className="mb-4">{feature["skills"]}</p>

      {feature["img"][0].imgDisc && (
        <h3 className="mb-4 text-xl text-gray-600">Images</h3>
      )}
      <div className="flex gap-10">
        {feature["img"].map((obj, idx) => {
          if (obj.imgURL)
            return (
              <div key={idx} className="w-1/2 ">
                <img
                  src={obj.imgURL}
                  alt={obj.imgDisc}
                  className="mb-4 h-[290px] object-contain shadow-lg  ring-1 ring-slate-200 "
                />
                <p className="text-center">{obj.imgDisc}</p>
              </div>
            );
        })}
      </div>
      {feature["heading"] === "Deployment" && (
        <div className="mt-10 flex gap-8">
          <p className=" border-b-2 border-black">View Site</p>
          <p className=" border-b-2 border-black">GitHub Repo</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsCard;
