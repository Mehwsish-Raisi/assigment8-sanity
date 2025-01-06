import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className=" body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="font-bold  text-2xl">BLOGIFY.</span>
    </Link>
    <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-400 sm:py-2 sm:mt-0 mt-4">
      ©  2024 — All Rights Reserved
      
    </p>
    <span className="inline-flex  sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href="https://www.linkedin.com/feed/" className="text-red-500 mr-4">
      <FaLinkedin className='text-3xl hover:text-red-400' />
      </Link>
      <Link target='_blank' href="https://www.linkedin.com/feed/" className="text-red-500">
      <FaGithub className='text-3xl hover:text-red-400' />
      </Link>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer

