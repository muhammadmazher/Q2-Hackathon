import Link from "next/link"
import Image from "next/image"

export default function HeroSection () {
    return(
        <div>
            {/* Main */}
            <div className="max-w-full mx-auto font-[Poppins] font-semibold xl:h-[750px] lg:pt-32 bg-[#FBEBB5]">

      {/* Parent of Text and Image */}
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-center">

        {/* Text Section */}
        <div className=" w-6/12 flex flex-col items-center md:items-start md:max-w-[440px] md:ml-[105px] pt-10 md:pt-0 ">
            <h1 className="pt-[100px] text-3xl sm:text-4xl md:text-5xl md:pt-[20px]  xl:text-6xl font-bold lg:text-[64px] tracking-wide text-center md:text-start">Rocket Single Seater</h1>
            <button className="mt-4 md:mt-[35px] md:text-lg lg:text-xl underline underline-offset-8 decoration-2 hover:text-gray-600 hover:decoration-gray-500 hover:decoration-2 w-[121px]"><Link href={"/Shop"}>Shop Now</Link></button>
        </div>
        {/* Image Section */}
        <div className="w-6/12 md:h-[580px] flex items-center">
          <Image src={"/Sofa1.png"} alt="Sofa Image" width={800} height={900}></Image>
        </div>
      </div>
    </div>
            
        </div>
    )
}