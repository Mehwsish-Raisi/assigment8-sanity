import React from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";


const HeroPage = () => {
  return (
    <div>
      <div className=" bg-[url(https://static.vecteezy.com/system/resources/previews/023/180/782/non_2x/floral-background-illustration-of-nature-flower-hello-spring-and-summer-beauty-and-fashion-for-web-banner-poster-marketing-social-media-vector.jpg)]
       w-[100%] rounded-lg  bg-cover bg-center  bg-fixed min-h-[400px]  flex ">
      
      <div className="flex ml-4 md:ml-7 gap-5 h-[300px] flex-col md:justify-center justify-center items-center  md:w-[500px]">
     
      <h1 className="w-[200px] md:w-[500px] text-center text-2xl sm:text-3xl md:text-4xl md:tracking-wider mt-20 font-bold">Our Top Gifts To Start a New Year</h1>
     <Link href='#cards'> <Button className=" hover:bg-red-400 text-black md:text-xl font-medium bg-transparent border-[1px] border-black rounded ">Explore My Blogs</Button> </Link>

      </div>
      </div>
    </div>
  );
};

export default HeroPage;
