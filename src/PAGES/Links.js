import React from "react";
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';




const Links = () => {
    return ( 
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
                <li className="flex justify-between items-center w-40 h-8 px-4 ml-[-100px] hover:rounded-md  hover:ml-[-10px] duration-300 bg-gray-500">
                    <a href="https://www.linkedin.com/in/akash-ooti-418486243/" className="flex justify-between items-center w-full text-white">Linkedien <FaLinkedin /></a>
                </li>
                <li className="flex justify-between items-center w-40 h-8 px-4 ml-[-100px] hover:rounded-md  hover:ml-[-10px] duration-300 bg-gray-500">
                    <a href="https://github.com/Akashooti" className="flex justify-between items-center w-full text-white">Github<FaGithub/></a>
                </li>
            
                <li  className=" flex justify-between items-center w-40 h-8 px-4 ml-[-100px] hover:rounded-md  hover:ml-[-10px] duration-300 bg-gray-500">
                    <a href="mailto:Akashooti45@email.com" className="flex justify-between items-center w-full text-white">Contact Us  <HiOutlineMail/></a>
                </li>
            
               
            </ul>
            </div>
    );
}
export default Links;