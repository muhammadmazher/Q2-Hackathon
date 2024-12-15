import Link from "next/link";
import Image from "next/image";

export default function NewArrivals () {
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h- full  bg-[#FFF9E5] items-center justify-center mx-auto">
                
                {/* Image Section */}
                <div className="p-10 w-12/12">
                    <Image 
                    src="/asgaard_sofa.png" 
                    alt="Asgaard_Sofa" 
                    width={900} height={607} 
                    className=""/>
                </div>

                {/* Text Section */}
                <div className="m-8 w-12/12 h-[136px] lg:w-6/12 xl:w-[430px] md:h-[145px] lg:ml-[120px] xl:mt- xl:ml-[130px] text-center mx-auto">
                    <h1 className=" text-lg md:text-xl xl:text-2xl font-semibold">New Arrivals</h1>
                    <h2 className=" text-3xl md:3xl lg:text-4xl xl:text-5xl lg:mt-2 xl:mt-4 font-bold">Asgaard Sofa</h2>
                    <Link href="/"><div className="border border-black  font-semibold hover:text-white hover:bg-black mx-auto
                        w-[155px] h-[40px] text-base mt-6 content-center
                        md:w-[170px] md:h-[40px] md:text-lg md:mt-6
                        lg:w-[200px] lg:h-[50px] lg:text-xl lg:mt-8 
                        xl:w-[255px] xl:h-[64px] xl:text-xl xl:mt-12 xl:py-4"><p>Order Now</p></div></Link>
                </div>

            </div>

        </div>
    );
}