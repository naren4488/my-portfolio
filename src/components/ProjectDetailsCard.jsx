/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProjectDetailsCard = ({ feature, idIndex }) => {
  // console.log(feature['heading'])
  // console.log(feature['heading'])
  console.log(idIndex);
  return (
    <div id={idIndex} className={`p-6 bg-white  shadow-md mt-6 relative`}>
      <h1 className="text-2xl mb-6 font-normal">{feature["heading"]}</h1>
      {/* <p>{idIndex}</p> */}
      <h3 className="text-xl mb-4 font-normal">Scope of work</h3>
      <ul className=" list-disc pl-16 mb-4">
        {feature["scope of work items"].map((data, idx) => {
          if (data) return <li key={idx}>{data}</li>;
        })}
      </ul>
      <h3 className="text-xl mb-4 font-normal">Skills used</h3>
      <p className="mb-4">{feature["skills"]}</p>

      {feature["img"][0].imgDisc && (
        <h3 className="text-xl mb-4 font-normal">Images</h3>
      )}
      <div className="flex gap-10">
        {feature["img"].map((obj, idx) => {
          if (obj.imgURL)
            return (
              <div key={idx} className="border border-black w-1/2">
                <img
                  src={obj.imgURL}
                  alt={obj.imgDisc}
                  className="shadow-lg ring-1 mb-4 ring-slate-200  h-[290px] object-contain "
                />
                <p className="text-center">{obj.imgDisc}</p>
              </div>
            );
        })}
      </div>
      {feature["heading"] === "Deployment" && (
        <div className="flex gap-8 mt-10">
          <p className=" border-b-2 border-black">View Site</p>
          <p className=" border-b-2 border-black">GitHub Repo</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsCard;
