import repair from "../../../Image/Repair.jpg";
import dream from "../../../Image/Dream.jpg";
import Navigator from "../../../Image/tajmohol.jpg";

const Project = () => {
  return (
    <div className="my-10 ">
      <h1 className="my-10 text-center font-bold">My Project </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        <div><a href="https://repair-zone-e11f8.web.app/">
          <img src={repair} className="w-full h-80 rounded-2xl" />
        </a></div>
        <a href="https://resilient-banoffee-a2dac7.netlify.app/">
          <img src={dream} className="w-full h-80 rounded-2xl" />
        </a>
        <a href="https://tourist-guide-6180c.web.app/">
          <img src={Navigator} className="w-full h-80 rounded-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Project;
