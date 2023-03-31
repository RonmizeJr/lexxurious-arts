import React from 'react';

function Services() {
  return (
    <div className='w-full bg-green-500 py-16 px-4'>
      <h2 className='text-center text-2xl font-bold'>Services</h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-2 justify-center'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>Logos</div>
            <div>$20</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className='flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>
              Get Started
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>Logos</div>
            <div>$20</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className='flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>
              Get Started
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-center'>Logos</div>
            <div>$20</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className='flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
