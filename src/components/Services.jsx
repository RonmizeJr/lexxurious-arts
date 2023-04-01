import React from 'react';
import Mirror from '../assets/Looking in the mirror.jpg';

function Services() {
  return (
    <div className='w-full py-[10rem] px-4 bg-green-700'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={Mirror}
            alt='Looking in the Mirror'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Logos</h2>
          <p className='text-center text-4xl font-bold'>$50</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>
              Get Customized Logos Hand drawn.
            </p>
            <p className='py-2 border-b mx-8'>
              Have a business identity that you can be proud of
            </p>
            <p className='py-2 border-b mx-8'>Affordable Price.</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Now
          </button>
        </div>
        <div className='w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={Mirror}
            alt='Looking in the Mirror'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Book Covers</h2>
          <p className='text-center text-4xl font-bold'>$150</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>
              Get Customized Hand Drawn Cover Art.
            </p>
            <p className='py-2 border-b mx-8'>
              Give Your Book the Love it deserves with fabulous Cover art
            </p>
            <p className='py-2 border-b mx-8'>Affordable Price.</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Now
          </button>
        </div>
        <div className='w-full shadow-xl bg-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={Mirror}
            alt='Looking in the Mirror'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Home Decor</h2>
          <p className='text-center text-4xl font-bold'>$250</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>
              Get Customized Hand Drawn Artwork for your Home Decorating.
            </p>
            <p className='py-2 border-b mx-8'>Multitude of sizes</p>
            <p className='py-2 border-b mx-8'>Affordable Price.</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
