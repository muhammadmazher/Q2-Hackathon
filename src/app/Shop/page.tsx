import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { LayoutGrid } from "lucide-react";


export default function Shop () {
    return (
        <div>
           

            <div className="w-full flex h-[100px] bg-[#FAF4F4] mt-2 py-8 pl-16">
                <div className="pt-1">
                <Link href="/Shop"><SlidersHorizontal /></Link>
                </div>
                    <p className="text-xl pl-4">Filter</p>

                <div className="pt-1 pl-4">
                    <Link href="/Shop"><LayoutGrid /></Link>
                </div>

            </div>

            
            <div className="flex items-center justify-center bg-cover bg-center w-[1530px] h-[300px]" style={{ backgroundImage: 'url(\'thumbnail_breadcrumb.jpg\')'}}>
                <div className="w-[1530px] h-[300px] backdrop-blur-sm text-center content-center">
                    <h1 className="text-4xl font-bold mb-2 text-black font-[] ">
                    Your Text Here</h1>
                    <button className=" px-8 py-2 bg-[#FAF4F4] hover:bg-black hover:text-[#FAF4F4] text-black font-semibold rounded-full"><Link href="#" >
                    Click Me</Link></button>
                </div>
            </div>
      
            
           
            

        </div>

    )
}