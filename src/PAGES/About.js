import React from 'react';

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 mr-4 mb-4 md:mr-20'>
            About
          </p>
        </div>
        <p className='text-xl mt-2 text-justify md:mt-10'>
          I completed my MCA (Master of Computer Applications) Degree in the year 2023, and I'm passionate about leveraging my knowledge to create innovative web applications. With a strong foundation in web technologies, including HTML, CSS, and JavaScript, I bring creativity and precision to every project I undertake.
        </p>
        <p className='text-xl mt-4 text-justify'>
          My journey in the world of web development has been a thrilling adventure. I've honed my skills by diving deep into modern frameworks and libraries, such as React and Tailwind CSS, to craft dynamic and user-friendly interfaces. These technologies not only excite me but also empower me to turn ideas into reality.
        </p>
        <p className='text-xl mt-4 text-justify'>
          In addition to front-end development, I have a solid grasp of back-end technologies. MongoDB is my go-to database solution for building scalable and efficient server applications. Its flexibility and performance have allowed me to create robust and data-driven web solutions that meet the needs of today's digital landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
