// import Link from "next/link";
// import { SlidersHorizontal } from "lucide-react";
// import { LayoutGrid } from "lucide-react";


// export default function Shop () {
//     return (
//         <div>
           

//             <div className="w-full flex h-[100px] bg-[#FAF4F4] mt-2 py-8 pl-16">
//                 <div className="pt-1">
//                 <Link href="/Shop"><SlidersHorizontal /></Link>
//                 </div>
//                     <p className="text-xl pl-4">Filter</p>

//                 <div className="pt-1 pl-4">
//                     <Link href="/Shop"><LayoutGrid /></Link>
//                 </div>

//             </div>

            
//             <div className="flex items-center justify-center bg-cover bg-center w-[1530px] h-[300px]" style={{ backgroundImage: 'url(\'thumbnail_breadcrumb.jpg\')'}}>
//                 <div className="w-[1530px] h-[300px] backdrop-blur-sm text-center content-center">
//                     <h1 className="text-4xl font-bold mb-2 text-black font-[] ">
//                     Your Text Here</h1>
//                     <button className=" px-8 py-2 bg-[#FAF4F4] hover:bg-black hover:text-[#FAF4F4] text-black font-semibold rounded-full"><Link href="#" >
//                     Click Me</Link></button>
//                 </div>
//             </div>
      
            
           
            

//         </div>

        import Image from "next/image"
        import ProductCard from "../Component/ProductCard";
        import Link from "next/link";
        import BgImage from "../Component/BgImage";
        
        const Shop = () => {
        
            const productDetail = [
                {imagePath: "/assets/products/1.webp" , name: "Trenton modular sofa_3", price: "Rs. 25,000.00"},
                {imagePath: "/assets/products/2.webp" , name: "Granite dining table with dining chair", price: "Rs. 25,000.00"},
                {imagePath: "/assets/products/3.webp" , name: "Outdoor bar table and stool", price: "Rs. 25,000.00"},
                {imagePath: "/assets/products/4.webp" , name: "Plain console with teak mirror", price: "Rs. 25,000.00"},
                {imagePath: "/assets/products/5.webp" , name: "Grain coffee table", price: "Rs. 15,000.00"},
                {imagePath: "/assets/products/6.webp" , name: "Kent coffee table", price: "Rs. 225,000.00"},
                {imagePath: "/assets/products/7.webp" , name: "Round coffee table_color 2", price: "Rs. 251,000.00"},
                {imagePath: "/assets/products/8.webp" , name: "Reclaimed teak coffee table", price: "Rs. 25,200.00"},
                {imagePath: "/assets/products/9.webp" , name: "Plain console_", price: "Rs. 258,200.00"},
                {imagePath: "/assets/products/10.webp" , name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00"},
                {imagePath: "/assets/products/11.webp" , name: "SJP_0825", price: "Rs. 200,000.00"},
                {imagePath: "/assets/products/122.webp" , name: "Bella chair and table", price: "Rs. 100,000.00"},
                {imagePath: "/assets/products/13.webp" , name: "Granite square side table", price: "Rs. 100,000.00"},
                {imagePath: "/assets/products/14.webp" , name: "Asgaard sofa", price: "Rs. 250,000.00"},
                {imagePath: "/assets/products/15.webp" , name: "Maya sofa three seater", price: "Rs. 115,000.00"},
                {imagePath: "/assets/products/16.webp" , name: "Outdoor sofa set", price: "Rs. 244,000.00"},
            ]
        
            return (
            <div className="max-w-[1440px] mx-auto font-Poppins">
        
                {/* Background Image */}
                <BgImage pageName="Shop"/>
        
                {/* Filter Tab */}
                <div className="mt-[47px]">
                    
                </div>
        
                {/* Products */}
                <div className="mt-[17px] max-w-[1240px] w-full mx-auto flex flex-wrap justify-center gap-[30px]">
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
                <div className="mt-[92px] max-w-[1440px] mx-auto bg-[#FAF4F4] ">
                    <div className="py-[96px] max-w-[1240px] mx-auto flex">
                        {/* Free Delivery */}
                        <div>
                            <h4 className="text-[32px] font-medium">Free Delivery</h4>
                            <p className="text-xl text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
                        </div>
        
                        {/* 90 Days Return */}
                        <div>
                            <h4 className="text-[32px] font-medium">90 Days Return</h4>
                            <p className="text-xl text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
                        </div>
        
                        {/* Secure Payment */}
                        <div>
                            <h4 className="text-[32px] font-medium">Secure Payment</h4>
                            <p className="text-xl text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
          )
        }
        
        export default Shop
