import Image from "next/image";
import link from "next/link";
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-50">
       <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
    src={"/image/logo.png"} 
    alt="NausheenKhan" 
    width={100} 
    height={100} 
    className="w-[50px]" 
/>
      <span className="ml-3 text-xl">NausheenKhan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 NausheenKhan —
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center 
    sm:justify-start">
      <a 
  target="_blank" 
  rel="noopener noreferrer" 
  href="https://www.facebook.com/profile.php?id=61551920698108" 
  className="text-gray-500"
>
  <FaFacebookSquare className="text-3xl hover:text-[#6596f9]" />
</a>
    </span>
  </div>
  </footer>
 </div>
  );
};

export default  Footer;
