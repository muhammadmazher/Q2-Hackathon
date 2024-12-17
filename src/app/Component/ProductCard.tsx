import Image from "next/image"
import Link from "next/link"

const ProductCard = (props: {name: string, price: string , imagePath: string}) => {

  return (
    <div className="max-w-[287px] h-[350px]">

      {/* <div className="h-[370px] lg:w-[230px] lg:h-[350px] w-[256px] bg-white hover:border hover:shadow-lg">
                        <Link href="/">
                            <Image src="/p1.png" alt="Trenton_modular_sofa_3" width={460} height={460} className=" "/>
                            <p className="md:lg lg:text-xl px-4">Trenton modular sofa</p>
                            <p className="text-xl lg:text-3xl lg:pt-4 md:pt-11 pt-4">Rs. 25,000.00</p>
                        </Link>
                    </div> */}

        {/* Image */}
        <div className="hover:border hover:border-slate-100 rounded-xl hover:shadow-lg my-10 lg:px-2">
        <div className="h-[280px] w-[250px] flex flex-col items-center justify-center mx-auto">
            <Image src={props.imagePath} alt="Product-Image" width={400} height={400} className="object-contain w-full h-full"></Image>
        </div>

        {/* Product Detail */}
        <div className="flex flex-col p-4 text-center mx-4">
          <h3 className="cursor-pointer font-normal"><Link href={"/productdetail"}>{props.name}</Link></h3>
          <p className="text-2xl mt-4 ">{props.price}
          </p>
        </div>
        </div>
    </div>
  )
}

export default ProductCard