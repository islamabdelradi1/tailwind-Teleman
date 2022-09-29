import React from 'react'

function Sec5() {
    return (
        <div>
                    <section  className='Sechree  mt-80 bg-slate-100 pb-40'>
            <div className='  relative  z-0 text-center left-22 '>
                <h1 className=' text-[150px]  text-slate-300 '>5</h1>
            </div>
            <div className='text-center z-10 relative -top-[190px]'>
            <div className=' relative left-[1000px] top-20 z-0'>
                    <img className='w-20 animate-bounce' src="https://teleman.thecodestudio.xyz/frontend/titania/assets/img/graphics/icons/bub-blue.svg" alt="bub-blue.svg" />
                </div>
                <h1 className='  text-4xl font-bold text-slate-700 z-10 relative'>Start your Free trial</h1>
                <p className=' py-2 text-slate-400'>Dont struggle anymore to manage tasks. Everything is easy to setup</p>
            </div>
            <div  className=' md:flex justify-center block mx-3 '>
                <input type="text" placeholder='Name *' className=' border border-b-slate-500 bg-transparent mr-5 outline-none w-[100%] my-5 p-2 md:w-[300px]' />
                <input type="email" placeholder='Email *' className=' border border-b-slate-500 bg-transparent mr-5 outline-none w-[100%] my-5 p-2 md:w-[300px]' />
                <input type="number" placeholder='Phone Number *' className=' border border-b-slate-500 bg-transparent mr-5 outline-none w-[100%] my-5 p-2 md:w-[300px] ' />
                <button className='border border-2 rounded-full border-green-500 px-5 py-2 text-green-500 font-bold hover:bg-green-500 hover:text-white   my-5 p-2  mx-auto flex md:mx-0'>Subscribe Now</button>

            </div>
        </section>
        </div>
    )
}

export default Sec5