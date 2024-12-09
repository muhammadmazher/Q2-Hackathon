import Link from "next/link"
import Image from "next/image"

export default function HeroSection () {
    return(
        <div>
            <div  className="bg-[#FBEBB5] flex w-full xl:h-[860px] lg:h-[700] md:h-auto">
                <div className="w-5/12 md:text-red-600 lg:text-blue-600 xl:text-black md:text-4xl lg:text-5xl xl:text-6xl font-semibold md:pl-[120px] lg:pl-[180px] xl:pl-[240px] md:py-[250px] lg:py-[358px] xl:py-[408px]" >
                    <h1>Rocket Single Seater</h1>
                    <div>
                        <h3 ><Link href="/Shop" className="w-[92px] text-base lg:text-lg underline underline-offset-8 mt-8 pb-1 hover:decoration-gray-500 hover:text-gray-600">Shop Now</Link></h3>
                    </div>
                    
                </div>
                <div className=" w-7/12 md:pt-12">
                    <Image 
                    src="/Sofa1.png"
                    alt="Rocket-Single-Seater"
                    height={900}
                    width={853}
                    className=""/>
                </div>
                

            </div>
            
        </div>
    )
}