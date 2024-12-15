import Link from "next/link"

export default function Footer () {
    return (
        <div>
            <div className="w-full h-[480px] justify-items-center sm:flex-col hidden lg:block">
                <div className=" flex lg:w-[1320px] w-full h-[419px] lg:border-b-2 ">
                    
                    <div className="mt-40 w-[285px] h-[72px] text-[#9F9F9F] text-base ml-2">
                        <p>400 University Drive Suite 200 Coral Gables,</p>
                        <p>FL33134 USA</p>
                    </div>

                    <div className=" flex w-[640px] h-[312px pl-20">

                        <div className=" w-[200px] h-[312px] font-semibold k tracking-wide">
                            <h5 className="text-[#9F9F9F] py-10 text-[17px]">Links</h5>
                            <Link href=""><p className="py-6">Home</p></Link>
                            <Link href=""><p className="py-6">Shop</p></Link>
                            <Link href=""><p className="py-6">About</p></Link>
                            <Link href=""><p className="py-6">Contact</p></Link>
                        </div>

                        <div className="w-[280px] h-[312px] font-semibold  tracking-wide pl-16">
                            <h5 className="text-[#9F9F9F] py-10 text-[17px]">Help</h5>
                            <Link href=""><p className="py-6">Payment Options</p></Link>
                            <Link href=""><p className="py-6">Returns</p></Link>
                            <Link href=""><p className="py-6">Privacy Policies</p></Link>
                        </div>

                        <div className="w-[286px] h-[312px] font-semibold tracking-wide  pl-16">
                            <h5 className="text-[#9F9F9F] py-10 text-[17px]">Newsletter</h5>
                                <input type="Email" placeholder="Enter Your Email Address"  className="w-44 bg-white text-sm mt-[27px] border-b-2 border-b-black focus:outline-none" />
                            
                        </div>
                        

                    </div>
                    <div className="w-[286px] h-[312px] font-semibold tracking-wide pl-1">
                            <Link href=""><p className="pt-[130px] underline underline-offset-4">SUBSCRIBE</p></Link> 
                    </div>

                    

                </div>

                <div className="w-full   pt-4 flex lg:tracking-wide lg:pt-4 mx-auto ">
                            <p className="lg:pl-[108px]">2024 Design by: Emas Web Solution All rights reverved</p>
                </div>
            </div>
            
        </div>
    )
}