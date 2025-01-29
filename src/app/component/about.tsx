import Image from "next/image";
import React from 'react';


const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <img
        className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
        alt = "hero"
        src={"/image/profile.jpg"}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      A Little About MySelf
        <br className="hidden lg:inline-block" />
        About Me
    
      </h1>
      <p className="mb-5 leading-relaxed">
     Phone Number:03XXXXXXXXX
     Email:nonikhan@f1gmail.com
      </p>
      <p className="mb-5 leading-relaxed">
        I did my bachelor's degree from the esteemed  Sir Syed Govt Girls College.i furthered my education with a professional 
        B.ED degree from karachi university.currently,i'm expanding my skillset in web development at GIAIC.
        I'm a lifelong learner ,always eager to acquire new knowledge and experiences.
      </p>
      <div className="flex justify-center">
        <a href={"/image/cv.jpg"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About
