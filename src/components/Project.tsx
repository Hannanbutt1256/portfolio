import pr1 from "../assets/project (1).png";
import pr2 from "../assets/project (2).png";
import pr4 from "../assets/project (4).png";
import pr5 from "../assets/project (5).png";
const Project = () => {
  return (
    <div
      id="Projects"
      className="p-2 px-7 mt-5 mx-5 md:h-screen font-mont bg-lightBeige text-charcoal"
    >
      <h1 className="text-center p-6 font-bold text-4xl bg-gradient-to-r from-mintGreen to-softBlue bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
        <a href="https://internship-eta-livid.vercel.app/" target="_blank">
          <div className="rounded-2xl bg-slate-100 p-[2px] hover:bg-gradient-to-br hover:from-mintGreen hover:to-softBlue">
            <div className="flex flex-col items-center bg-lightBeige w-full h-full rounded-2xl ">
              <img src={pr1} className="p-2 w-60 " />

              <h3 className="text-xl font-bold">Domino's Page</h3>
              <p className="font-medium mb-2 mx-1">
                A Landing page for Pizza Shop
              </p>
            </div>
          </div>
        </a>
        <a href="https://internship-3-4-5.vercel.app/" target="_blank">
          <div className="rounded-2xl bg-slate-100 p-[2px] hover:bg-gradient-to-br hover:from-mintGreen hover:to-softBlue">
            <div className="flex flex-col items-center bg-lightBeige w-full h-full rounded-2xl ">
              <img src={pr2} className="p-2 w-60 " />

              <h3 className="text-xl font-bold">Image Gallery</h3>
              <p className="font-medium text-center mb-2 mx-1">
                An image gallery using grids for responsivness
              </p>
            </div>
          </div>
        </a>
        <a href="https://hannanbutt-portfolio.netlify.app/" target="_blank">
          <div className="rounded-2xl bg-slate-100 p-[2px] hover:bg-gradient-to-br hover:from-mintGreen hover:to-softBlue">
            <div className="flex flex-col items-center bg-lightBeige w-full h-full rounded-2xl ">
              <img src={pr4} className="p-2 w-60 " />

              <h3 className="text-xl font-bold text-center ">Portfolio</h3>
              <p className="font-medium text-center ">
                Old showcasing my skills
              </p>
            </div>
          </div>
        </a>
        <a href="https://crudstu.netlify.app/" target="_blank">
          <div className="rounded-2xl bg-slate-100 p-[2px] hover:bg-gradient-to-br hover:from-mintGreen hover:to-softBlue">
            <div className="flex flex-col items-center bg-lightBeige w-full h-full rounded-2xl ">
              <img src={pr5} className="p-2 w-60 " />

              <h3 className="text-xl font-bold text-center">
                Student Management System
              </h3>
              <p className="font-medium text-center mb-2 mx-1">
                Complete Student Management System with raw HTML CSS and
                JavaScript
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Project;
