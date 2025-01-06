import React from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
  return (
    <div className="bg-background/50 backdrop-blur sm:sticky top-0">
      <header className=" lg:h-20  border-b h-auto   ">
        <div className="px-10 flex justify-between  items-center  py-5">
          <Link href={"/"}>
          
            
            <h1 className="font-bold  text-2xl">BLOGIFY.</h1>
         
          </Link>
          <nav className="md:flex hidden gap-4 items-center  justify-center w-full sm:w-auto ">
            <ul className="flex space-x-6">
              <li className="hover:text-orange-900">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-orange-900">
                <Link href="/About">About</Link>
              </li>
              <li className="hover:text-orange-900">
                <Link href="/Contact">Contact</Link>
              </li>
              <li className="hover:text-orange-900">
                <Link href="/Cards">Blogs</Link>
              </li>
            </ul>
            
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <button>
                  <IoMenuOutline className="h-[24px] w-[24px] " />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle> <Link href={"/"}>
            <h1 className="font-bold my-4 text-2xl">BLOGIFY</h1>
          </Link>
          </SheetTitle>
                  <SheetDescription>
                  <nav className="flex flex-col md:hidden gap-4  ">
            <ul className="flex flex-col gap-4">
              <li className="hover:text-orange-900">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-orange-900">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-orange-900">
                <Link href="#contact">Contact</Link>
              </li>
              <li className="hover:text-orange-900">
                <Link href="#blogs">Blogs</Link>
              </li>
            </ul>
          </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
