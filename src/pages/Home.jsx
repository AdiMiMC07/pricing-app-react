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
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="449"><path fill={`${Mode==='dark'?'#252D37':'#F1F5FE'}`} fill-rule="evenodd" d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"/></svg>
        </div>
        {showModal ? <Modal Mode={Mode} setShowModal={setShowModal} price={sliderRef.current? Math.round(sliderRef.current.value*0.16*100)/100 : 0} pageviews={sliderRef.current.value} planType={toggle}></Modal> :''}
        <div className={`home ${Mode==='dark'?'text-white':''}`}>
            <label className="inline-flex absolute right-0 items-center cursor-pointer self-start my-3 p-4 border rounded bg-white mr-10 shadow-lg">
                <span className="ms-3 text-sm font-medium mx-2 text-black">Dark Mode</span>
                <input type="checkbox" value="" className="checkBox sr-only" name='mode' id='mode' onInput={changeMode}/>
                <div className="toggle-button relative w-11 h-6 bg-gray-200 rounded-full"></div>
            </label>
            <div className="center-div">
                <div className={`center-top-div`}>
                    <h1 className={`text-4xl my-4`}>Simple, traffic-based pricing</h1>
                    <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>Sign-up for our 30-day trial. No credit card required.</p>
                </div>
                <div className={`center-bottom-div w-100 ${Mode==='dark'?'bg-[#2E3945]':'bg-white'}`} style={{filter:`drop-shadow(${Mode==='dark'?'0 0 1rem rgb(8, 8, 8)':'0 0 1rem rgb(229, 236, 238)'})`}}>
                    <div className={`main-content`}>
                        <div className="head-1 flex justify-center items-center">
                            <h3 className={`${Mode==='dark'?'text-white':'text-gray-400'} text-xl m-auto`}>{sliderRef.current?sliderRef.current.value:0}K PAGEVIEWS</h3>
                            <div className='flex m-auto justify-center items-center'>
                                <h1 className='text-5xl '>${sliderRef.current? Math.round(sliderRef.current.value*0.16*100)/100 : 0}</h1>
                                <b></b>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>&nbsp;/ month</p>
                            </div>
                        </div>
                        <div className="range-slider">
                            <div className="slider-container mb-5">
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
                        <div className="flex items-center justify-end mr-24">                          
                            <label className="inline-flex items-center cursor-pointer">
                            <span className={`ms-3 text-sm ${Mode==='dark'?'text-white':'text-gray-400'} mx-2`}>Monthly Billing</span>
                            <input type="checkbox" value="" className="checkBox sr-only" onInput={()=>changePlan()}/>
                            <div className="toggle-button relative w-11 h-6 bg-gray-200 rounded-full"></div>
                            </label>
                            <span className={`ml-4 text-sm ${Mode==='dark'?'text-white':'text-gray-400'} mx-2`}>Yearly Billing</span>
                            <span className="rounded rounded-xl text-xs text-orange-700 bg-orange-100 p-1">25% discount</span>
                        </div>
                        
                        
                    </div>
                    <hr />
                    <div className="footer grid grid-cols-2 items-center p-2">
                        <div className="mx-12">
                            <div className='flex items-center gap-4'>
                                <img className='' src={checkIcon} alt=""/>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>Unlimited websites</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='' src={checkIcon} alt=""/>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>100% data ownership</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='' src={checkIcon} alt=""/>
                                <p className={`${Mode==='dark'?'text-white':'text-gray-400'}`}>Email reports</p>
                            </div>
                        </div>
                        <div className="button ml-24">
                            <button className={`rounded text-white p-4 ${Mode==='dark'?'bg-[#000929]':'bg-[#00185D]'}`} style={{borderRadius:"2rem",width:'75%'}} onClick={()=>setShowModal(true)}>
                                <span className='opacity-85 hover:opacity-100'>Start my trial</span>
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