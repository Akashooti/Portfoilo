import React from 'react';


const Contact = () => {
    return(
            <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
                <div className='flex flex-col p-4 justify-center max-2-screen-lg max-auto h-full'>
                    <div className='pb-8'>
                        <p className='text-5xl font-bold inline border-b-4 border-gray-500 ml-56'>Contact us</p>
                        <p className='py-6 ml-56'>Submit the from below to get in touch with me</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* getform the webiste for form saving the data */}
                        <form action="https://getform.io/f/d7a5c1f2-08d5-495e-bad1-d3da91b4f933"method='POST' className='flex flex-col w-full md:w-1/2'>
                            <input type='text'
                             name='name' 
                             placeholder='Enter your name ' className='p-2 bg-transparent border-2 rounded-md text-white foucs:outline-none'/>
                            <input type='email'
                             name='email' 
                             placeholder='Enter your email ' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white foucs:outline-none'/>
                            <textarea 
                             name='message' placeholder="Please Enter Questions" rows="10" 
                             className='p-2 bg-transparent border-2 rounded-md text-white foucs:outline-none'/>
                             <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 max-auto flex items-center rounded-md hover:scale-110 duration-300'>let's Submit</button>
                        </form>
                    </div>
                </div>
            </div>

    );
}
export default Contact;