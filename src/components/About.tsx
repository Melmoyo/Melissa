import profile from "../assets/images/melissa_profile.jpg";
const About=()=>{
    return (<>
    <section
        className="about text-white mx-auto scroll-mt-24 mb-8"
        id="about"
      >
        <div className="flex flex-col items-center text-center lg:flex-row lg:space-x-8 lg:text-left">
          {/* Image column */}
          <div className="w-full flex justify-center items-center mt-20 lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={profile}
              alt="melissa"
              className="mx-auto rounded-full w-96 h-96 lg:mx-0"
            />
          </div>

          {/* Text column */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-4">
            <h2 className="text-teal-400 uppercase">About Me</h2>
            <p className="text-white text-3xl font-bold tracking-tight">
              Passionate about building for the web
            </p>
            <p className="text-gray-500 tracking-tight leading-loose">
              I am a frontend developer with experience building modern web
              applications. I specialize in React, TypeScript and design systems
              that scale.
              <br /> My work focuses on crafting interfaces that are not only
              visually polished but also performant and accessible. I believe
              the best products come from close collaboration between design and
              engineering.
              <br />
              When I'm not coding, you can find me exploring and gaining
              knowledge in other tech fields such as cybersecurity.
            </p>
          </div>
        </div>
      </section>


    </>)
}
export default About;