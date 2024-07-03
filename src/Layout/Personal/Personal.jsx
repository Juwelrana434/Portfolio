import img from "../../../Image/image.png";
import resume from "../../../Image/Resume02.pdf";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Personal = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row  justify-center">
         
          <div>
            <img
              src={img}
              className=" lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] rounded-full bg-black"
            />
            <div className="flex">
              <a href="https://www.facebook.com/">
                <FaFacebook className="w-16 h-16 rounded-full text-blue-700 border-4 " />
              </a>

              <a href="https://www.linkedin.com/in/md-juwel-rana-a86781294">
                <FaLinkedin className="w-16 h-16 rounded-full text-blue-700 border-4 lg:mx-10" />
              </a>
              <a href="https://github.com/Juwelrana434">
              <FaGithub className="w-16 h-16 rounded-full text-blue-700 border-4" />
              </a>
              
            </div>
          </div>
          <div>
            <p>I am Web Developer</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <p>Name: Md. Juwel Rana</p>
              <p>Birth date: 24 april 1993</p>
              <p>Nationality: Bangladeshi</p>
              <p>Address: Kushtis, Dhaka</p>
              <p>Language: Bangla, English</p>
              <p>phone: 01723954334</p>
              <p>Email: jewel.rana434@gmail.com</p>
            </div>
            <button className="btn btn-primary mt-4">
              <a href={resume} download="resume.pdf">
                {" "}
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
