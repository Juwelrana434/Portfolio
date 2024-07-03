import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto sticky z-50 top-0">
            <div className="navbar bg-[#197ee4]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 p-2 shadow rounded-2xl">
        <li><a>Skills</a></li>
        <li><a>Project</a></li>
        <li><a>About Me</a></li>
        <li><a>Resume</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Juwel</a>
  </div>
  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
       <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
    </ul>
  </div> */}
  <div className="navbar-end items-center">
  <p><FaEnvelope /></p>
    <a className="pl-4">jewel.rana434@gamil.com</a>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;