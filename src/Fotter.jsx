import React from 'react'
import { AiFillFacebook , AiFillTwitterSquare , AiFillLinkedin , AiFillYoutube } from "react-icons/ai";

function Fotter() {
    return (
        <div className='flex justify-around items-center bg-slate-200 py-20'>
            <div>
                <img src="imgs\logo.png" alt="logo.png" className='w-28' />
                <p className='py-3 text-slate-500'>© 2022 Teleman - Telemarketing & VoIP Service SaaS Application</p>
                <div className="iconsocials flex">
                    <AiFillFacebook className='mx-2 text-slate-500 hover:text-emerald-600' />
                    <AiFillTwitterSquare className='mx-2 text-slate-500 hover:text-emerald-600' />
                    <AiFillLinkedin className='mx-2 text-slate-500 hover:text-emerald-600' />
                    <AiFillYoutube className='mx-2 text-slate-500 hover:text-emerald-600' />
                </div>
            </div>
            <div className=' hidden md:flex'>
                <a href="#" className='px-3'>Home</a>
                <a href="#" className='px-3'>Pricing</a>
                <a href="#" className='px-3'>Blogs</a>
                <a href="#" className='px-3'>Login</a>
            </div>
        </div>
    )
}

export default Fotter