import React from 'react'

const Modal = ({Mode,setShowModal,price,pageviews,planType}) => {
    return (
       
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
          >
            <div className="relative w-100 my-6">
              <div className={`border-0 rounded-lg shadow-lg relative flex flex-col md:w-full w-5/6 mx-auto bg-white outline-none focus:outline-none ${Mode==='dark'?'bg-[#2E3944] text-white':'bg-white'}`}>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">
                    Hi! Thanks for selecting a plan for your website <br/>
                  </p>
                    <h1 className='text-3xl'>Plan Details</h1>
                  <p className="my-4 text-lg leading-relaxed">
                    PageViews = {pageviews}K and the price is ${price} / {planType?'monthly':'yearly'}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b">
                  <button
                    className="text-white bg-red-500 background-transparent font-bold uppercase px-6 py-2 md:text-sm text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 md:text-sm text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-blue-800 rounded rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal