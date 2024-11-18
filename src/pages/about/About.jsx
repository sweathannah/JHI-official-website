const About = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full flex items-center justify-center ">
          <h1 className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat]">
            Who we are
          </h1>
        </div>
      </section>
      <section className="font-[Montserrat] my-[7rem] px-[7rem]">
        <div>
        <h2 className="text-[#292666] text-[2.5rem] leading-[3.1rem] text-center font-semibold">About the organization</h2>
        <p className="text-[1rem] leading-[2rem] text-[#333333] text-center mt-[1.3rem]">The Jimoh Habibullah Initiative is a NGO dedicated to fostering empathy, empowerment, and community growth. We offer mentorship programs, including one-on-one mentoring and workshops, to help individuals achieve their goals. <br/> Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training. <br/> Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. By focusing on these principles, we aim to drive transformative change and enable individuals and communities to reach their full potential. <br/> The Foundation was established in 2020 by Jimoh Habibullahi an astute and successful businessman. The Foundation is based in Ilorin, Nigeria.</p>
        </div>
      </section>
    </>
  );
};

export default About;
