import img from "../../../Image/image.png"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content grid grid-cols-2">
    <img
      src={img}
      className="rounded-full bg-black w-[300px] h-[300px] border-white border-8" />
    <div>
      
      <p>HI THERE!</p>
      <p className="py-6">
      
      <p className="text-5xl font-bold mb-3">I’m WEB DESIGNER</p>
<p className="text-xl">I’m a Web Developer based in Kushtia, 
Dhaka. I strives to build immersive and beautiful web applications through 
carefully crafted code and user-centric design.</p>
      </p>
      <button className="btn btn-primary mr-9">About Me</button>
      <button className="btn btn-primary">My Work</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;