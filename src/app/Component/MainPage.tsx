import Link from "next/link"
import Image from "next/image"


export default function MainPage () {
    return (
        <div>
            <div className="bg-[#FAF4F4] grid grid-cols-1 md:grid-cols-2 text-center w-full h-full  pb-10 pt-8 md:pr-14 font-[poppins] gap-8 mx-auto">
                <div className="w-12/12 mx-auto">
                    <div className=" w-full pr-24 md:px-12 pt-5">
                        <Image 
                        src="/sidetable_1.png"
                        alt=""
                        width={1050}
                        height={633}
                        />
                    </div>
                    <div className="text-center py-4 md:pr-[100px] lg:pr-[120px] xl:pr-[200px] lg:pt-[24px] mx-auto">
                        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Side table</h3>
                        <p className="text-sm lg:text-base underline underline-offset-8 pt-2 lg:pt-6 font-semibold"><Link href="/">View More</Link></p>
                    </div>
                </div>

                <div className="w-12/12 mx-auto">
                    <div className="pr-28 md:pr-16 w-full ">
                        <Image 
                        src="/sidetable_2.png"
                        alt=""
                        width={1000}
                        height={600}
                        className=""/>
                    </div>
                    <div className="text-center py-4 md:pr-[100px] lg:pr-[120px]  xl:pr-[200px] lg:pt-[24px]  mx-auto">
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Side table</h3>
                        <p className="text-sm lg:text-base underline underline-offset-8 pt-2 lg:pt-6 font-semibold"><Link href="/">View More</Link></p>
                    </div>
                </div>
            </div>

            <div className="grid bg-[#FFFFFF] w-full h-[1880px] md:h-[1140px] lg:h-[720px] xl:h-[800px] mx-auto font-[poppins]">
                <div className=" w-full">
                    <h2 className=" text-center text-2xl md:text-3xl lg:text-4xl pt-16 font-semibold tracking-wide">Top Picks For You</h2>
                    <h3 className="text-center px-10 pt-6 text-base lg:text-lg font-medium text-[#9F9F9F]">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-4 md:gap-12 lg:gap-10 xl:gap-24 justify-evenly lg:pt-1 text-center font-semibold mx-auto">
                    
                    <div className="h-[370px] lg:w-[230px] lg:h-[350px] w-[256px] bg-white hover:border hover:shadow-lg ">
                        <Link href="/">
                            <Image src="/p1.png" alt="Trenton_modular_sofa_3" width={460} height={460} className=" "/>
                            <p className="md:lg lg:text-xl px-4">Trenton modular sofa</p>
                            <p className="text-2xl lg:text-3xl lg:pt-4 md:pt-11 pt-4">Rs. 25,000.00</p>
                        </Link>
                    </div>

                    <div className="h-[370px] lg:w-[230px] lg:h-[350px] w-[256px] bg-white hover:border hover:shadow-lg">
                        <Link href="/">
                            <Image src="/p2.png" alt="Granite_dining_table_with_dining_chair" width={460} height={460} className=" "/>
                            <p className="md:lg lg:text-xl px-4">Granite dining table with chair</p>
                            <p className="text-2xl lg:text-3xl pt-4">Rs. 25,000.00</p>
                        </Link>
                    </div>

                    <div className="h-[370px] lg:w-[230px] lg:h-[350px] w-[256px] bg-white hover:border hover:shadow-lg">
                        <Link href="/">
                            <Image src="/p3.png" alt="Outdoor_bar_table_and_stool" width={460} height={460} className=" "/>
                            <p className="md:lg lg:text-xl px-4">Outdoor bar table and stool</p>
                            <p className="text-2xl lg:text-3xl pt-4">Rs. 25,000.00</p>
                        </Link>
                    </div>

                    <div className="h-[370px] lg:w-[230px] lg:h-[350px] w-[256px] bg-white  hover:border hover:shadow-lg ">
                        <Link href="/">
                            <Image src="/p4.png" alt="Trenton_modular_sofa_3" width={460} height={460} className=" "/>
                            <p className="md:lg lg:text-xl px-4">Plain console with teak mirror</p>
                            <p className="text-2xl lg:text-3xl pt-4 ">Rs. 25,000.00</p>
                        </Link>
                    </div >
                </div>

                <div className="w-24 h-9 text-center underline underline-offset-[12px] text-base lg:text-lg mt-6 lg:mt-2 font-semibold decoration-2 hover:text-gray-500 mx-auto">
                        <Link href="/"><p className="">View More</p>
                        </Link>
                    </div>

            </div>

            
        </div>
    )
}