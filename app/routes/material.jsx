import Packages from "../components/Packages";
const Material = () => {
  return (
    <div className="flex flex-col justify-center content-center text-center pt-32 h-fit">
      <h2 className=" text-4xl prose text-gray-500 font-semibold mb-14">
        Material de estudio UCE
      </h2>
      <Packages />
    </div>
  );
};

export default Material;
