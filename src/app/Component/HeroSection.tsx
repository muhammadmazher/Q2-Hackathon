import Link from "next/link"
import Image from "next/image"

export default function HeroSection () {
    return(
        <div>
            {/* <div  className=" bg-[#FBEBB5] flex flex-col md:flex-row w-full h-[620px] md:h-[500px] lg:h-[650px] border xl:h-[890px] mx-auto">
                <div className="md:w-8/12 px-8 lg:w-5/12 font-[poppins] font-semibold text-center md:text-start text-4xl pt-[100px] md:text-4xl md:pl-[85px] md:pt-[250px]
                lg:text-5xl lg:pl-[100px] lg:pt-[320px]
                xl:text-6xl xl:pl-[200px] xl:pt-[408px]" >
                    <h1>Rocket Single Seater</h1>
                    <h3 ><Link href="/Shop" className="w-[92px] text-base lg:text-lg xl:text-xl underline underline-offset-8 mt-8 pb-1 hover:decoration-gray-500 hover:text-gray-600">Shop Now</Link></h3>
                </div>
                <div className="max-w-[800px] w-full px-6 md:px-0 md:w-6/2 lg:w-7/12 md:pt-12 mx-auto ">
                    <Image 
                    src="/Sofa1.png"
                    alt="Rocket-Single-Seater"
                    height={900}
                    width={800}
                    className="   "/>
                </div>
            </div> */}
            {/* Main */}
            <div className="max-w-full mx-auto font-[Poppins] font-semibold bg-[#FBEBB5]">

      {/* Parent of Text and Image */}
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-center">

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:max-w-[440px] md:ml-[105px] pt-10 md:pt-0">
            <h1 className="pt-[100px] text-3xl md:text-4xl md:pt-[20px] lg:text-5xl xl:text-6xl lg:text-[64px] tracking-wide text-center md:text-start">Rocket single seater</h1>
            <button className="mt-[35px] text-2xl hover:border-b hover:border-black w-[121px]"><Link href={"/Shop"}>Shop Now</Link></button>
        </div>
        {/* Image Section */}
        <div className="max-w-[600px] md:h-[580px] flex items-center">
          <Image src={"/Sofa1.png"} alt="Sofa Image" width={600} height={440}></Image>
        </div>
      </div>
    </div>
            
        </div>
    )
}