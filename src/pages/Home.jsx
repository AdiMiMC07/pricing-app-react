import React, { useEffect, useRef, useState } from 'react'
import checkIcon from '../images/icon-check.svg'
import Modal from '../components/Modal';


const Home = () => {
    const sliderRef = useRef();
    const [sliderRange, setSliderRange] = useState(0);
    const [Mode, setMode] = useState('light');
    const [toggle, setToggle] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const changeMode = ()=>{
        if(Mode==='light'){
            setMode('dark');
        }
        else setMode('light');
    }
    const changePlan = ()=>{
        let val = toggle;
        setToggle(!val);
    }
    let max,min;
    max = 500;
    min = 0;
    const handleSliderInput= ()=>{
        const range = max - min;
        const distance = sliderRef.current.value - min;
        const percentage = (distance / range) * 100;
        setSliderRange(percentage);
    }
    useEffect (() => {
        handleSliderInput();
    }, [sliderRef]);
    return (
        <>
        
        <div className={`background ${Mode==='dark'?'bg-[#000000]':'bg-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width:'100%' , height:"100%"}}><path fill={`${Mode==='dark'?'#252D37':'#F1F5FE'}`} fillRule="evenodd" d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"/></svg>
        </div>
        {showModal ? <Modal Mode={Mode} setShowModal={setShowModal} price={sliderRef.current? Math.round(sliderRef.current.value*0.16*100)/100 : 0} pageviews={sliderRef.current.value} planType={toggle}></Modal> :''}
        <div className={`home ${Mode==='dark'?'text-white':''}`}>
            <label className="inline-flex absolute right-0 items-center cursor-pointer self-start my-2 p-2 border rounded bg-white mr-10 shadow-lg">
                <span className="ms-1 text-sm mx-2 text-black">Dark Mode</span>
                <input type="checkbox" value="" className="checkBox sr-only" name='mode' id='mode' onInput={changeMode}/>
                <div className="toggle-button relative w-11 h-6 bg-gray-200 rounded-full"></div>
            </label>
            <div className="center-div w-5/6 lg:w-1/2">
                <div className={`center-top-div`}>
                    <h1 className={`md:text-4xl my-4 text-xl`}>Simple, traffic-based pricing</h1>
                    <div className="flex flex-wrap justify-center md:text-md text-sm">
                        <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>Sign-up for our 30-day trial.</p>
                        <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>No credit card required.</p>

                    </div>
                </div>
                <div className={`center-bottom-div w-100 ${Mode==='dark'?'bg-[#2E3945]':'bg-white'}`} style={{filter:`drop-shadow(${Mode==='dark'?'0 0 1rem rgb(8, 8, 8)':'0 0 1rem rgb(229, 236, 238)'})`}}>
                    <div className={`main-content md:mb-10 mb-5`}>
                            <h3 className={`${Mode==='dark'?'text-white':'text-gray-400'} md:text-xl text-sm mx-auto head-1`}>{sliderRef.current?sliderRef.current.value:0}K PAGEVIEWS</h3>
                            <div className='flex mx-auto justify-center items-center head-2'>
                                <h1 className='md:text-5xl text-3xl'>${sliderRef.current? Math.round(sliderRef.current.value*0.16*100)/100 : 0}</h1>
                                <b></b>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'} text-sm md:text-md`}>&nbsp;/ month</p>
                            </div>
                        <div className="range-slider lg:self-end place-self-center">
                            <div className="slider-container md:mb-5">
                                <input type="range" 
                                onInput={handleSliderInput}
                                className="slider"
                                min={min}
                                max={max}
                                ref={sliderRef}
                                step={'1'}
                                defaultValue={100}
                                />
                                <div className="slider-thumb" style={{left: `calc(${sliderRange}% - 0.5em)` }}></div>
                                <div className={`progress ${Mode==='dark'?'bg-[#00FFBA]':'bg-[#9BE4E4]'}`} style={{ width: `${sliderRange}%` }}></div>
                            </div>
                        </div>
                            <div className="content-footer flex items-center md:justify-end md:mr-12 mx-auto">                          
                                <label className="inline-flex items-center cursor-pointer">
                                <span className={`ms-3 md:text-sm text-xs ${Mode==='dark'?'text-white':'text-gray-400'} mx-2`}>Monthly Billing</span>
                                <input type="checkbox" value="" className="checkBox sr-only" onInput={()=>changePlan()}/>
                                <div className="toggle-button relative w-11 h-6 bg-gray-200 rounded-full"></div>
                                </label>
                                <span className={`md:ml-4 md:text-sm text-xs ${Mode==='dark'?'text-white':'text-gray-400'} mx-2`}>Yearly Billing</span>
                                <span className="discount rounded rounded-xl text-xs text-orange-700 bg-orange-100 p-1">{window.innerWidth>500?'25% discount':'-25%'}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="footer grid md:grid-cols-2 items-center grid-cols-1">
                        <div className="md:mx-12 mx-auto">
                            <div className='flex items-center gap-4'>
                                <img className='' src={checkIcon} alt=""/>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'} md:text-md text-xs mt-2`}>Unlimited websites</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='' src={checkIcon} alt=""/>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'} md:text-md text-xs my-2`}>100% data ownership</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='' src={checkIcon} alt=""/>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'} md:text-md text-xs`}>Email reports</p>
                            </div>
                        </div>
                        <div className="button md:ml-24 text-center">
                            <button className={`rounded text-white p-2 ${Mode==='dark'?'bg-[#000929]':'bg-[#00185D]'}`} style={{borderRadius:"2rem",width:'75%'}} onClick={()=>setShowModal(true)}>
                                <span className='opacity-80 hover:opacity-100 md:text-md text-sm'>Start my trial</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home