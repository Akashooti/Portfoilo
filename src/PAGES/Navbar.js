import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Hero",
      title:"Home",
    },
    {
      id: 2,
      link: "About",
      title:"About",
    },
    {
      id: 3,
      link: "Skills",
      title:"Skills",
    },
    {
      id: 4,
      link: "Contact",
      title:"Contact",
    }
  ];
  

  return (
    <div class="Hero"  className='flex justify-between items-center w-full h-20 text-white bg-black fixed '>
      <div>
        <h1  className='text-5xl italic text-white font-serif ml-2 hover:text-teal-300'>Ooti</h1>
      </div >
      <ul  className='hidden md:flex'>
        {links.map(({ id,title,link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>
            <p className='mt-4 mr-8 text-2xl text-white hover:text-teal-300'>{title}</p>              
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

