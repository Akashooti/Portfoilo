import React from 'react';
import ht from "../IMAGES/HT.png";
import css1 from "../IMAGES/css1.png";
import js1 from "../IMAGES/js1.png";
import atom from "../IMAGES/atom.png";
import bootsrap from "../IMAGES/bootstrap.png";
import tailwind from "../IMAGES/tailwind.png";


const Skils = () => {
    const techs = [
        {
            id: 1,
            src: ht,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css1,
            title: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js1,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: atom,
            title: 'React',
            style: 'shadow-blue-300'
        },
        {
            id: 5,
            src: bootsrap,
            title: 'bootsrap',
            style: 'shadow-purple-600'
        },
        {
            id: 6,
            src: tailwind,
            title: 'tailwindcss',
            style: 'shadow-gray-200'
        },
       
       
       
    ];

    return (
        <div name="Skills" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg max-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline ml-60'>Skills</p>
                    <p className='py-6 ml-60'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 ml-32 gap-x-0 text-center gap-y-8 py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ml-28 ${style}`}>
                            <img src={src} alt={title} className='w-6/12 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skils;
