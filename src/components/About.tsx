const About = () => {
  return (
    <div className="p-2 px-7 mt-5 mx-5 md:h-screen font-mont bg-lightBeige text-charcoal ">
      <h1 className="text-center p-6 font-bold text-4xl bg-gradient-to-r from-mintGreen to-softBlue bg-clip-text text-transparent">
        About
      </h1>
      <div>
        <section className="flex flex-col md:flex md:flex-row md:justify-center md:items-center">
          <h2 className="text-2xl md:text-center font-bold p-2 w-1/2 ">
            Introduction
          </h2>
          <span className="border md:border-2 border-mintGreen md:py-14"></span>
          <p className="p-2 pr-6 font-medium ">
            "I’m a front-end developer specializing in building and optimizing
            interactive, user-centered websites and applications. My goal is to
            combine aesthetic design with intuitive functionality to deliver
            exceptional digital experiences."
          </p>
        </section>
        <section className="flex flex-col mt-4  md:flex md:flex-row md:justify-center md:items-center ">
          <h2 className=" text-2xl  md:text-end font-bold p-2 w-1/2">
            Skills & Expertise
          </h2>
          <span className="border md:border-2 border-mintGreen md:py-20 "></span>
          <div className="p-2 pr-6 font-medium">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Core Front-End Skills: HTML, CSS, JavaScript, React, TypeScript
              </li>
              <li>
                Frameworks & Libraries: Next.js, Tailwind CSS, UI libraries
                (mention any specific ones if relevant)
              </li>
              <li>
                Responsive design, performance optimization, version control
                (Git), agile development practices
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col mt-4 md:flex md:flex-row md:justify-center md:items-center ">
          <h2 className="text-2xl md:text-center font-bold p-2 w-1/2">
            Personal Approach
          </h2>
          <span className="border md:border-2 border-mintGreen md:py-14"></span>
          <p className="p-2 pr-6 font-medium ">
            "I believe that great software is crafted through attention to
            detail and continuous improvement. I’m always looking to expand my
            knowledge, integrate best practices, and explore the latest in
            technology to create web solutions that make a difference."
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
