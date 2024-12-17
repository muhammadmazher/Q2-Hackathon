import Link from "next/link";
import Image from "next/image";
import { SlidersHorizontal, LayoutGrid, Rows3 } from "lucide-react";
import ProductCard from "../Component/ProductCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"


export default function Shop () {
    
    const productDetail = [
        {imagePath: "/p1.png" , name: "Trenton Modular Sofa Article 3", price: "Rs. 25,000.00"},
        {imagePath: "/p2.png" , name: "Granite Dining Table with Dining Chair", price: "Rs. 25,000.00"},
        {imagePath: "/p3.png" , name: "Outdoor Bar Table and Stool", price: "Rs. 25,000.00"},
        {imagePath: "/p4.png" , name: "Plain Console with Teak Mirror", price: "Rs. 25,000.00"},
        {imagePath: "/p5.png" , name: "Grain Coffee Table Vintage Design", price: "Rs. 15,000.00"},
        {imagePath: "/p6.png" , name: "Kent Coffee Table Wood Impression", price: "Rs. 225,000.00"},
        {imagePath: "/p7.png" , name: "Round Coffee Table Color 2", price: "Rs. 251,000.00"},
        {imagePath: "/p8.png" , name: "Reclaimed Teak Coffee Table", price: "Rs. 25,200.00"},
        {imagePath: "/p9.png" , name: "Plain console Pure Wooden", price: "Rs. 258,200.00"},
        {imagePath: "/p10.png" , name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00"},
        {imagePath: "/p11.png" , name: "Outdoor Coffe Table with Chair", price: "Rs. 200,000.00"},
        {imagePath: "/p12.png" , name: "Bella Chair and Table Iron Frame", price: "Rs. 100,000.00"},
        {imagePath: "/p13.png" , name: "Granite square side table", price: "Rs. 100,000.00"},
        {imagePath: "/p14.png" , name: "Asgaard sofa", price: "Rs. 250,000.00"},
        {imagePath: "/p15.png" , name: "Maya sofa three seater", price: "Rs. 115,000.00"},
        {imagePath: "/p16.png" , name: "Outdoor sofa set", price: "Rs. 244,000.00"},
    ]




    return (

        <div className="bg-white h-full h-ful font-[Poppins] ">
                

                    {/* Background Image */}
                <div className="pt- flex items-center justify-center bg-cover bg-center w-full h-full mx-auto" style={{ backgroundImage: 'url(\'thumbnail_breadcrumb.jpg\')'}}>
                    <div className="w-[1530px] h-[300px] backdrop-blur-sm text-center content-center mx-auto">
                        <Image src="/Logo.png" alt="logo" height={100} width={100} className= "mx-auto"></Image>
                        <h1 className="text-4xl font-bold mb-2 text-black font-[] ">
                        Shop</h1>
                        <div className=" my-6 text-center justify-items-center mx-auto"><Breadcrumb >
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="font-semibold">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                <BreadcrumbLink href="/Shop">Shop</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        </div>

                            {/* Button Code for If need button on Bg Image */}
                        {/* <button className=" px-8 py-2 bg-[#FAF4F4] hover:bg-black hover:text-[#FAF4F4] text-black font-semibold rounded-full"><Link href="#" >
                        Click Me</Link></button> */}
                    </div>
                </div>


                    {/* Filter Tab */}
                <div className="flex w-full h-[70px] justify-between content-center  text-sm md:text-base lg:text-lg bg-[#FAF4F4] my-4 px-16 mx-auto">
                    <div className="flex gap-x-4 lg:gap-x-6 items-center ">
                        <Link href="/Shop"><SlidersHorizontal /></Link>
                        <p className="">Filter</p>
                        <Link href="/Shop"><LayoutGrid /></Link>
                        <Link href="/Shop"><Rows3 /></Link>
                        <div className="pl-4 h-8 border-l-2 border-gray-400 content-center"> Showing 1–16 of 32 results</div>
                    </div>

                    <div className=" gap-x-4 lg:gap-x-5 items-center hidden lg:flex ">
                        <p className="">Show</p>
                        <div className="h-9 w-9 bg-white text-center content-center text-gray-500">16</div>
                        <p className="">Short by</p>
                        <div className="h-9 w-40 bg-white pl-6 content-center text-gray-500">Default</div>
                    </div>    
                </div>

                {/* All Products Section */}
                <div className="max-w- h-full mx-auto font-Poppins mt-4">
            
                    <div className="mt-[17px] max-w-full bg-white w-full mx-auto flex flex-wrap justify-center gap-[40px]">
                        {productDetail.map((item, i) => {
                            return (<>
                            <Link href="/productdetail"><ProductCard key={i} name={item.name} price={item.price} imagePath={item.imagePath} /></Link>
                            </>)
                        })}
                    </div>
            
                    {/* Page Number Section */}
                    <div className="flex flex-wrap gap-[38px] justify-center mt-[117px]">
                        <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">1</button>
                        <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">2</button>
                        <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">3</button>
                        <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">Next</button>
                    </div>
            
                    {/* Delivery Section*/}
                    <div className="mt-[92px] h-80 max-w-full mx-auto bg-[#FAF4F4] ">
                        <div className="py-[120px] text-left w-full mx-auto flex gap-6 lg:gap-12 px-24">
                            {/* Free Delivery */}
                            <div>
                                <h4 className="text-xl lg:text-3xl font-medium">Free Delivery</h4>
                                <p className="text-base lg:text-xl text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
                            </div>
            
                            {/* 90 Days Return */}
                            <div>
                                <h4 className="text-xl lg:text-3xl font-medium">90 Days Return</h4>
                                <p className="text-base lg:text-xl text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
                            </div>
            
                            {/* Secure Payment */}
                            <div>
                                <h4 className="text-xl lg:text-3xl font-medium">Secure Payment</h4>
                                <p className="text-base lg:text-xl text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    );
}
