import Link from "next/link"
import Image from "next/image"
import { Clock, Calendar } from 'lucide-react';


export default function OurBlogs () {
    return (
        <div>
            <div className="w-full h-full text-center items-cente justify-center mx-auto font-[Poppins]">

                <div className="w-full mt-16 px-10 mx-auto">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Our Blogs</h4>
                    <h3 className="tracking-wide text-base lg:text-lg text-[#9F9F9F] font-medium mt-4">Find a bright ideal to suit your taset with out great selection</h3>
                </div>

                <div className=" w-full grid grif-cold-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 mx-auto pt-8">

                            {/* blog 1 - Image section */}
                        <div className="w-[293px] xl:w-[393px] md:h-[555px] py-4">
                            <Image  src="/blog1.png" alt="pic" width={400} height={400}/>

                            {/* Blog Text, and Icons */}
                            <p className="text-lg lg:text-xl pt-4">Going all-in with millennial design</p>
                             <Link href="/"><p className="text-xl xl:text-2xl py-3 font-semibold underline underline-offset-8">Read More</p>
                             </Link>
                             <div className="my-4 flex justify-evenly mx-auto">
                                <div className="flex gap-2">
                                 <Clock />
                                 <p className=""> 5 mins</p>
                                </div>
                                <div className="flex gap-2">
                                    <Calendar />
                                <p>12th Oct 2024</p>
                                </div>
                             </div>
                        </div>

                            {/* blog 1 - Image section */}
                        <div className="w-[293px] xl:w-[393px] md:h-[555px] py-4">
                            <Image  src="/blog2.png" alt="pic" width={400} height={400} />

                            {/* Blog 2 Text, and Icons */}
                            <p className="text-lg lg:text-xl pt-4">Going all-in with millennial design</p>
                             <Link href="/"><p className="text-xl xl:text-2xl py-3 font-semibold underline underline-offset-8">Read More</p>
                             </Link>
                             <div className="my-4 flex justify-evenly mx-auto">
                                <div className="flex gap-2">
                                 <Clock />
                                 <p className=""> 5 mins</p>
                                </div>
                                <div className="flex gap-2">
                                    <Calendar />
                                <p>12th Oct 2024</p>
                                </div>
                             </div>
                        </div>

                            {/* blog 1 - Image section */}
                        <div className="w-[293px] xl:w-[393px] justify-self-centercenter items-center py-4">
                            <Image  src="/blog3.png" alt="pic" width={400} height={400} />

                            {/* Blog Text, and Icons */}
                            <p className="text-lg lg:text-xl pt-4">Going all-in with millennial design</p>
                             <Link href="/">
                             <p className=" text-xl xl:text-2xl my-3 font-semibold underline underline-offset-8 mx-auto">
                                Read More</p>
                             </Link>
                             <div className="my-4 flex justify-evenly mx-auto">
                                <div className="flex gap-2">
                                 <Clock />
                                 <p className=""> 5 mins</p>
                                </div>
                                <div className="flex gap-2">
                                    <Calendar />
                                <p>12th Oct 2024</p>
                                </div>
                             </div>
                        </div>
                </div>
                
                    {/* View More */}
                <div className="w-[90px] lg:text-xl font-semibold my-10 mx-auto">
                        <Link href="/" ><p className="w-[90px] h-7 lg:w-28 lg:h-8 underline underline-offset-8 decoration-2 hover:text-gray-600 hover:decoration-gray-500 hover:decoration-2 mx-auto">View More</p>
                        </Link>
                </div>

            </div>

        </div>
    )

}