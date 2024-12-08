import Link from "next/link";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import { LayoutGrid } from "lucide-react";


export default function Shop () {
    return (
        <div>
            <div className="mt-1">
                <Image src="/shop.png" alt="shop" width={1600} height={300} />
            </div>

            <div className="w-full flex h-[100px] bg-[#FAF4F4] mt-2 py-8 pl-16">
                <div className="pt-1">
                <Link href="/Shop"><SlidersHorizontal /></Link>
                </div>
                    <p className="text-xl pl-4">Filter</p>

                <div className="pt-1 pl-4">
                    <Link href="/Shop"><LayoutGrid /></Link>
                </div>

            </div>
            

        </div>

    )
}