import './App.css';
import React from 'react';
// h-[350px] w-[450px]
function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:bg-transparent bg-pale-blue">
      <div className='flex md:flex-col md:justify-center md:items-center md:bg-transparent h-[350px] w-[450px] bg-white rounded-3xl'>
        <aside className='w-1/2 flex flex-col gap-4  px-4 text-center justify-center items-center rounded-3xl bg-gradient-to-b from-slate-blue-light to-slate-blue-dark'>
          <div className='text-gray-300'>Your Result</div>
          <div className='flex flex-col justify-center items-center gap-1 h-28 w-28 text-5xl font-bold rounded-full text-white bg-gradient-to-b from-violet-blue to-slate-blue-dark'>76
            <span className='text-xs text-gray-400'>of 100</span></div>
          <div className='text-white text-xl font-semibold'>Great</div>
          <div className='text-center text-xs text-gray-300 font-medium px-3 md:px-0 md:pb-7'>You scored higher than 65% of the people who have taken these tests.</div>
        </aside>
        <div className='flex w-1/2 flex-col px-4 py-8 md:py-5 md:bg-white'>
          <h1 className='text-lg font-semibold'>Summary</h1>

          <ul className='flex flex-col gap-3 py-4 pb-6'>
            <li className='flex justify-between bg-light-red-light rounded-lg p-2 text-sm'>
              <div className='flex gap-1'>
                <img src="/images/icon-reaction.svg" alt='img' />
                <span className="text-light-red-default">Reaction</span>
              </div>
              <div className='pl-2'>
                80<span className='text-gray-500'> / 100</span></div>
            </li>
            <li className='flex justify-between bg-orangey-yellow-light rounded-lg p-2 text-sm'>
              <div className='flex gap-1'>
                <img src="/images/icon-memory.svg" alt='img' />
                <span className="text-orangey-yellow-default">Memory</span>
              </div>
              <div className='pl-2'>
                92<span className='text-gray-500'> / 100</span></div>
            </li>
            <li className='flex justify-between bg-green-teal-light rounded-lg p-2 text-sm'>
              <div className='flex gap-1'>
                <img src="/images/icon-verbal.svg" alt='img' />
                <span className="text-green-teal-default">Verbal</span>
              </div>
              <div className='pl-2'>
                61<span className='text-gray-500'> / 100</span></div>
            </li>
            <li className='flex justify-between bg-cobalt-blue-light rounded-lg p-2 text-sm'>
              <div className='flex gap-1'>
                <img src="/images/icon-visual.svg" alt='img' />
                <span className="text-cobalt-blue-default">Visual</span>
              </div>
              <div className='pl-2'>
                72<span className='text-gray-500'> / 100</span></div>
            </li>
          </ul>
          <button className='hover:bg-violet-blue hover:text-white text-sm w-full h-9 flex justify-center items-center rounded-3xl text-pale-blue bg-dark-gray-blue px-3 py-4 font-medium '>Continue</button>

        </div>
      </div >
    </main>
  );
}

export default App;
