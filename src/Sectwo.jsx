import React from 'react'

function Sectwo() {
    return (
        <div className='Sectwo mx-auto  py-20'>
            <div className=' relative text-center  z-0'>
                <h1 className=' text-[200px] text-slate-300'>1</h1>
            </div>
            <div className='text-center z-10 relative -top-[130px] '>
                <h1 className='  text-4xl font-bold text-slate-700'>Sales just got Simple</h1>
                <p className=' py-2 text-slate-400'>Learn to sell better and faster</p>
            </div>
            <div className=' grid grid-cols-2 gap-20 text-center  md:grid-cols-3 px-20'>
                <div>
                <img src="imgs\icons8-card-security-50.png" alt="icons8-card-security-50.png" className='mx-auto' />
                <p>Subscription payment</p>
                <p>Get payments periodically</p>
                </div>
                <div>
                <img src="imgs\icons8-download-from-cloud-50.png" alt="icons8-download-from-cloud-50"  className='mx-auto'/>
                <p>Subscription payment</p>
                <p>Get payments periodically</p>
                </div>
                <div>
                <img src="imgs\icons8-box-32.png" alt="icons8-box-32"  className='mx-auto'/>
                <p>Subscription payment</p>
                <p>Get payments periodically</p>
                </div>
                <div>
                <img src="imgs\icons8-clock-add-50.png" alt="icons8-clock-add-50.png"  className='mx-auto'/>
                <p>Subscription payment</p>
                <p>Get payments periodically</p>
                </div>
                <div>
                <img src="imgs\icons8-topic-48.png" alt="icons8-topic-48.png"  className='mx-auto'/>
                <p>Subscription payment</p>
                <p>Get payments periodically</p>
                </div>
                <div>
                <img src="imgs\icons8-stopwatch-50.png" alt="icons8-stopwatch-50.png"  className='mx-auto'/>
                <p>Subscription payment</p>
                <p>Get payments periodically</p>
                </div>
            </div>
        </div>
    )
}

export default Sectwo