import React from 'react'

function Sec2() {
    return (
        <div className=' bg-slate-200 '>
            <div className=' relative text-center z-0 '>
                <h1 className=' text-[150px]  text-slate-300'>2</h1>
            </div>
            <div className='text-center z-10 relative -top-[120px]'>
                <h1 className='  text-4xl font-bold text-slate-700'>How it Works</h1>
                <p className=' py-2 text-slate-400'>Our business model is very simple</p>
            </div>
        <div  className=' grid grid-cols-1 md:grid-cols-3  '>
            <div className='mx-auto'>
                <div className='bg-white  rounded-full w-56 h-56 flex  justify-center items-center relative mx-auto'>
                    <img src="imgs\icons8-u-turn-to-right-50.png" alt="icons8-u-turn-to-right-50.png" className=' w-10 h-10'/>
                    <div className=' absolute top-0 right-5 bg-green-500 text-white rounded-full px-4 py-2'>1</div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-9xl text-gray-300  px-5'>1</h1>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-700 pb-2'>Think</h1>
                        <p className=' w-[350px]  text-gray-400'>Think about the marketing business and get contacts with customers</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <div className='bg-white mx-auto  rounded-full w-56 h-56 flex  justify-center items-center relative'>
                    <img src="imgs\icons8-u-turn-to-right-50.png" alt="icons8-u-turn-to-right-50.png" className=' w-10 h-10'/>
                    <div className=' absolute top-0 right-5 bg-green-500 text-white rounded-full px-4 py-2'>2</div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-9xl text-gray-300 px-5'>2</h1>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-700 pb-2'>Iterate</h1>
                        <p className=' w-[350px]  text-gray-400'>Apply the plan to a real numberSelect providers about to start</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <div className='bg-white mx-auto rounded-full w-56 h-56 flex  justify-center items-center relative'>
                    <img src="imgs\icons8-u-turn-to-right-50.png" alt="icons8-u-turn-to-right-50.png" className=' w-10 h-10'/>
                    <div className=' absolute top-0 right-5 bg-green-500 text-white rounded-full px-4 py-2'>3</div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-9xl text-gray-300 px-5'>3</h1>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-700 pb-2'>Create</h1>
                        <p className=' w-[350px]  text-gray-400'>Let's start the campaign and make leads earn sales and reach</p>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div>
                <div className=' float-right '>
                    <img className='w-20 animate-bounce' src="https://teleman.thecodestudio.xyz/frontend/titania/assets/img/graphics/icons/bub-blue.svg" alt="bub-blue.svg" />
                </div>
                <div className=' '>
                    <img className='w-20 animate-bounce' src="https://teleman.thecodestudio.xyz/frontend/titania/assets/img/graphics/icons/bub-purple.svg" alt="bub-blue.svg" />
                </div>
            </div>
            
        </section>
        </div>
    )
}

export default Sec2