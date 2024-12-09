import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { Menu } from "lucide-react"
import Link from "next/link"
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';

export default function Navbar () {
    return(
        <div>
            <div className="w-full bg-[#FBEBB5] fixed left-0 right-0 z-50 opacity-90  ">

                    {/* Desktop Navbar */}
                <div className="lg:flex hidden py-4  lg:gap-36 xl:gap-72  justify-end lg:pr-16 xl:pr-20 mx-auto ">
                    <div>
                        <div className="flex gap-14 pl- mt-1 lg:text-base xl:text-lg font-semibold">
                            <Link href="/"  className="hover:underline-offset-4 hover:underline hover:decoration-black">Home</Link>
                            <Link href="/Shop" className="hover:underline-offset-4 hover:underline hover:decoration-black">Shop</Link>
                            <Link href="/" className="hover:underline-offset-4 hover:underline hover:decoration-black">About</Link>
                            <Link href="/" className="hover:underline-offset-4 hover:underline hover:decoration-black">Contact</Link>
                        </div>
                    </div>

                    <div className="flex mt-1 gap-10 ">
                        <Link href="/"><User className="hover:fill-inherit" /></Link>
                        <Link href="/"><Search className="hover:fill-inherit"/></Link>
                        <Link href="/"><Heart className="hover:fill-inherit"/></Link>
                        <Link href="/"><ShoppingCart className="hover:fill-inherit"/></Link>
                    </div>

                </div >

                {/* Mobile & Tablet Navbar  */}
                <div className="lg:hidden flex px-8 md:pl-10 py-2 justify-between">
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>
                                    
                                        <div>
                                            <nav className="w-full bg-[#FBEBB5] ">
                                                <div className="flex justify-center flex-col p-4 gap-2 text-base text-black ">
                                                    <Link href="/" className="border-b border-white pb-2 hover:text-gray-500">Home</Link>
                                                    <Link href="/" className="border-b border-white pb-2 hover:text-gray-500">Shopt</Link>
                                                    <Link href="/" className="border-b border-white pb-2 hover:text-gray-500">About</Link>
                                                    <Link href="/" className=" border-white pb-2 hover:text-gray-500">Contact</Link>
                                                </div>
                                            </nav>
                                        </div>
                                    </SheetTitle>
                                    <SheetDescription> 
                                       
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                    </Sheet>
                        <div className="flex gap-6 sm:gap-8 md:gap-10 py-2 pr-2 md:pr-4">
                            <Link href="/"><User className="hover:fill-inherit" /></Link>
                            <Link href="/"><Search className="hover:fill-inherit"/></Link>
                            <Link href="/"><Heart className="hover:fill-inherit"/></Link>
                            <Link href="/"><ShoppingCart className="hover:fill-inherit"/></Link>
                        </div>
                </div>
             
            </div>

        </div>
    )
}