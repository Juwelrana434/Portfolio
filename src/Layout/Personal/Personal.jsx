import img from "../../../Image/image.png"
import resume from "../../../Image/Resume02.pdf"

const Personal = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={img}
      className="max-w-sm rounded-lg shadow-2xl border-4 border-blue-700" />
    <div>
      <p>I am Web Developer</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4"><p>Name:  Md. Juwel Rana</p>
      <p>Birth date:  24 april 1993</p>
      <p>Nationality:  Bangladeshi</p>
      <p>Address:  Kushtis, Dhaka</p>
      <p>Language:  Bangla, English</p>
      <p>phone:  01723954334</p>
      <p>Email:  jewel.rana434@gmail.com</p>
      
      
      </div>
      <button className="btn btn-primary mt-4"><a href={resume} download="resume.pdf"> Download Resume</a></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Personal;