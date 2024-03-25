"use client";
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import WalmartLogo from "../assets/Images/Walmart Logo White.png"
import {
    Grid2X2,
    Heart,
    Search,
    LayoutGrid,
    ShoppingCart,
    User,
} from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";
function Header() {
    const router = useRouter();
    const cart = useCartStore((state) => state.cart);
    const total = getCartTotal(cart);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputE = e.currentTarget.elements.namedItem('input') as HTMLInputElement;
        const input = inputE.value;
        router.push(`/search?q=${input}`);
        console.log({input});
    }
  return (
    <header  className="flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5 items-center">
        <Link href="/" className="mb-5 md:mb-0">
          <Image 
            src={WalmartLogo}
            alt="Walmart Logo"
            width={150}
            height={150}
            />
        </Link>

        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full w-full flex-1 ">
            <input type="text" name="input" placeholder="Search" className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"/>
            <button type="submit">
                <Search 
                    className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer"
                />
            </button>

        </form>
        <div className="flex space-x-5 mt-5 md:mt-5">
            <Link href={"/"} className="hidden xl:flex text-white font-bold item-center space-x-2 text-sm">
                <Grid2X2 size={20}/>
                <p>Department</p>
            </Link>
            <Link href={"/"} className="hidden xl:flex text-white font-bold item-center space-x-2 text-sm">
                <LayoutGrid size={20}/>
                <p>Services</p>
            </Link>
            <Link href={"/"} className="flex text-white font-bold item-center space-x-2 text-sm">
                <Heart size={20}/>
                <div>
                    <p className="text-xs font-extralight">Reorder</p>
                    <p>My Items</p>
                </div>
                
            </Link>
            <Link href={"/"} className="flex text-white font-bold item-center space-x-2 text-sm">
                <User size={20}/>
                <div>
                    <p className="text-xs font-extralight">Sign In</p>
                    <p>Account</p>
                </div>
            </Link>
            <Link href={"/basket"} className="flex text-white font-bold item-center space-x-2 text-sm">
                <ShoppingCart size={20}/>
                <div>
                    <p className="text-xs font-extralight">{cart.length > 0 ? `${cart.length} items`: "No items"}</p>
                    
                    <p>
                        {cart.length > 0 ? `${total}`: "0"}
                    </p>
                </div>
            </Link>
            
        </div>
    </header>
  )
}

export default Header