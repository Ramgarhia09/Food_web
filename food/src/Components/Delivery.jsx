import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full py-16 px-4'>
<h3 className='text-[#fbc531] font-bold text-2xl text-center'>
    Quick Deliver App
    </h3>
<div className='grid grid-cols-2 w-[70%] mx-auto my-10 '>
    <img src = "https://img.freepik.com/free-photo/person-taking-photo-seafood-dish-with-salmon_23-2150463233.jpg" className='w-[550px] mx-auto' />

<div className='flex flex-col justify-center'>
<p className='font-bold text-[green] text-[20px] md:text-[28px]'>Get The App</p>
<h2 className=' md:text-2xl lg:text-5xl py-2 font-bold'>The Fastest Food Delivery In India</h2>
<button className='bg-black sm:w-[100px] md:w-[150px] text-white rounded-md my-8 py-[19px] sm:text-[10px ]md:text-[20px] hover:text-[#fbc531]
font-semibold
'>Get Started</button>
    </div>
    </div>
    </div>
  )
}

export default Delivery