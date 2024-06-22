import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
   <section className='   mx-auto flex flex-col justify-center relative z-50'>
    <div>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 text-center to-cyan-500 py-20'>Gallery</h1>


        <div className=' max-w-full sm:max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 justify-center mx-auto gap-4 items-center px-4 '> 

            <Image src="/img1.jpeg" alt="" width={500} height={300} className='rounded-lg border-2 border-[#7601b1]' />
            <Image src="/img2.jpeg" alt="" width={500} height={300} className='rounded-lg border-2 border-[#7601b1]' />
            <Image src="/img3.jpeg" alt="" width={500} height={300} className='rounded-lg border-2 border-[#7601b1]' />
            <Image src="/img4.jpeg" alt="" width={500} height={300}  className='rounded-lg border-2 border-[#7601b1]'/>


        </div>
    </div>
   </section>
  )
}

export default Gallery