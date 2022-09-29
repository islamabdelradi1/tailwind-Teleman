import React, { useEffect } from 'react'
import { BiMenu } from "react-icons/bi";

function Nav() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
                document.getElementById("navbars").classList.add("bg-white");
            }else{
                document.getElementById("navbars").classList.remove("bg-white");

            }
        }
        )
    }, [])
    return (
        <>

        <div className='bgsecone'>
        <div className='flex justify-around items-center fixed w-[100%] z-20 h-[70px] ' id='navbars'>
            <div className='flex'>
                <BiMenu className=' text-3xl  cursor-pointer md:hidden' id='menuclik'/>
                <img src="imgs\logo.png" alt="logo.png" className=' w-[120px] ' />

                <div className=' hidden md:flex items-center'>
                <a href="#" className='px-4 hover:text-gray-400 hover:border-b-2 border-green-500 hover:pb-3'>Home</a>
                <a href="#" className='px-4 hover:text-gray-400 hover:border-b-2 border-green-500 hover:pb-3'>Pricing</a>
                <a href="#" className='px-4 hover:text-gray-400 hover:border-b-2 border-green-500 hover:pb-3'>Blogs</a>
                <a href="#" className='px-4 hover:text-gray-400 hover:border-b-2 border-green-500 hover:pb-3'>Login</a>
                </div>

            </div>
            
            <div>
                <button className=' text-green-500 border px-10 py-2 border-[2px] border-green-500 rounded-md font-bold hover:bg-green-500 hover:text-white'>Free Trial</button>
            </div>
        </div>

        <div className=' text-center'>
            
        <h1 className='text-2xl  md:text-5xl font-bold w-[100%]  pt-32 text-gray-600'>Personalized experiences your customers love</h1>
        <p className='py-5'>Take control over your business by deploying a full-featured invoicing personal instance.</p>
        <div>
            <button className=' bg-slate-50 rounded-full py-2 px-8 mb-10 mx-3 hover:shadow-xl'>Our Blogs</button>
            <button className=' bg-green-500 rounded-full py-2 px-8 mb-10 mx-3 text-white hover:shadow-xl' >Try For Free</button>
            <img src="imgs\8KptuMU1zd5E0PJeRneyy09k5gkiaDyLLnhI4Upe.png" alt="8KptuMU1zd5E0PJeRneyy09k5gkiaDyLLnhI4Upe" className=' mx-auto rounded-xl w-[800px]' />

        </div>
        </div>
        </div>
        </>

    )
}

export default Nav