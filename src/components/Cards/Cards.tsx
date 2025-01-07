import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

const Cards = ({data}:{data:Blog}) => {
  return (
    <div id="cards">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="w-full md:w-[380px]">
            <Image
              src={urlFor(data.image).url()}
              alt="card"
              width={380}
              height={300}
              className="w-full sm:h-auto "
            />
            <div className= "">
              <p className=" pt-4 text-[14px] md:text-[15px] font-medium">
                {data.Title}
              </p>
             
            <p className="text-[14px] line-clamp-2 md:text-[15px] py-2 text-[#757575]">
              {data.Description}
            </p>
            <Link href={`/blog/${data.slug}`}>
            <p className='bg-red-500 hover:bg-red-300 text-white font-medium text-center  rounded-md py-2'>Read More</p>
            </Link>
            </div>
          </div>
          
          </div>
          </div>
    </div>
  )
}

export default Cards
