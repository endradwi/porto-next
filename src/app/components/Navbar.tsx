import React from 'react'

function Navbar() {
  return (
    <div className='flex gap-10 justify-center items-center py-10 bg-[#578FCA] shadow'>
      <a className='px-5 py-2 hover:bg-white hover:rounded-full text-lg font-bold transition delay-150 duration-300 ease-in-out rounded-full' href='#about'>About Me</a>
      <a className='px-5 py-2 hover:bg-white hover:rounded-full text-lg font-bold transition delay-150 duration-300 ease-in-out rounded-full' href='#project'>My Project</a>
      <a className='px-5 py-2 hover:bg-white hover:rounded-full text-lg font-bold transition delay-150 duration-300 ease-in-out rounded-full' href='#about'>Contact</a>
    </div>
  )
}

export default Navbar
