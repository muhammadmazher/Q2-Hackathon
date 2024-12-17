import Link from "next/link";


const BgImage = (props:{pageName: string}) => {
  return (
    // <div className="relative mb-2 h-[316px]">
    //   {/* Bg Image */}
    //   <Image
    //     src="/thumbnail_breadcrumb.jpg"
    //     alt="background image"
    //     className="object-cover"
    //     fill
    //   ></Image>

    //   {/* Content */}
    //   <div className="absolute inset-0 flex flex-col items-center justify-center">
    //     <Image
    //       src="/assets/others/bg-logo.svg"
    //       alt="Logo"
    //       width={87}
    //       height={87}
    //     />
    //     <h1 className="text-4xl md:text-5xl font-medium">{props.pageName}</h1>
    //     <div className="flex items-center gap-4 mt-3">
    //       <span className="font-medium">Home</span>
    //       <Image src="/assets/others/RightArrow.svg" alt="Right Arrow" width={10} height={10} />
    //       <span className="font-light">{props.pageName}</span>
    //     </div>
    //   </div>
    // </div>

    <div className="flex items-center justify-center bg-cover bg-center w-[1530px] h-[300px] bg-green-200" style={{ backgroundImage: 'url(\'thumbnail_breadcrumb.jpg\')'}}>
//                 <div className="w-[1530px] h-[300px] backdrop-blur-sm text-center content-center">
//                     <h1 className="text-4xl font-bold mb-2 text-black font-[] ">
//                     Your Text Here</h1>
//                     <button className=" px-8 py-2 bg-[#FAF4F4] hover:bg-black hover:text-[#FAF4F4] text-black font-semibold rounded-full"><Link href="/" >
//                     Click Me</Link></button>
//                 </div>
//             </div>
      
  );
};

export default BgImage;