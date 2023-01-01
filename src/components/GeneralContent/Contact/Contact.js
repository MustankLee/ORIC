import React from 'react';
import Line from "../../Assets/LINE.webp";
import Gmail from "../../Assets/Gmail.png";
import Li  from "../../Assets/Linked.png";
import Wa from "../../Assets/WA.webp";
import Git from "../../Assets/github.png"

export default function Contact() {
  return (
    <div>
        <h2 className='font-black'>Contact</h2>
        <div className='my-8'>
           <a className='flex items-center my-5 drop-shadow-md bg-white p-2 rounded-md'>
            <img src={Line} alt="" className='w-16 h-16 max-md:w-10 max-md:h-10' />
            <p className='ml-5'>rico_susanto</p>
           </a>
           <a className='flex items-center my-5 drop-shadow-md bg-white p-2 rounded-md'>
            <img src={Gmail} alt="" className='w-16 h-16 max-md:w-10 max-md:h-10' />
            <p className='ml-5'>ricosusanto777@gmail.com</p>
           </a>
           <a href='https://www.linkedin.com/in/rico-susanto-736752252/' className='flex items-center my-5 drop-shadow-md bg-white p-2 rounded-md'>
            <img src={Li} alt="" className='w-16 h-16 max-md:w-10 max-md:h-10' />
            <p className='ml-5'>linkedin.com/in/rico-susanto-736752252</p>
           </a>
           <a className='flex items-center my-5 drop-shadow-md bg-white p-2 rounded-md'>
            <img src={Wa} alt="" className='w-16 h-16 max-md:w-10 max-md:h-10' />
            <p className='ml-5'>0852 7434 3991</p>
           </a>
           <a href='https://github.com/MustankLee' className='flex items-center my-5 drop-shadow-md bg-white p-2 rounded-md'>
            <img src={Git} alt="" className='w-16 h-16 max-md:w-10 max-md:h-10 rounded-md' />
            <p className='ml-5'>Mustank Lee</p>
           </a>
        </div>
    </div>
  )
}
