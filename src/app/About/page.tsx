import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link";


const AboutPage = () => {
  return (
    <div>
       

         <section className=" body-font">
  <div className="justify-center flex px-20 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
   
       <h1 className='text-xl font-bold text-red-400 mb-6 md:2xl: lg:text-3xl'>
        Welcome To My Blog!
      </h1> 
      <p className="mb-8 leading-relaxed">
      Welcome to BLOGIFY, your go-to destination for insightful, engaging, and informative content! Whether you&apos;re here to learn, explore, or get inspired, our blog is designed to cater to curious minds and passionate readers.
      </p>
      <p className='mb-6'>
      I am a front-end developer specializing in crafting engaging, responsive, and accessible user interfaces. I work primarily with HTML, CSS, JavaScript, and frameworks like Next.js and React to build dynamic, visually appealing web applications. My focus is on creating seamless user experiences that not only look great but also provide intuitive functionality across devices.
      </p>
      <div className="flex rounded-lg bg-red-400 justify-center">
      <Link href='#cards'> <Button className=" hover:bg-red-500  text-white text-xl font-medium bg-transparent py-6  border-black  ">Explore My Blogs</Button> </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="About Image"
        src="/images/profile.png"
        width={360}
        height={360}
      />
    </div>
  </div>
</section> 

     
    </div>
  )
}

export default AboutPage
