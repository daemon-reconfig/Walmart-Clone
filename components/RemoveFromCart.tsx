"use client";

import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";
import { Button } from "./ui/button";

function RemoveFromCart({product}: {product: Product}) {
        const removeFromCart = useCartStore((state) => state.removeFromCart);
        const handleRemove = () => {
                console.log('remove', product.meta.sku);
                removeFromCart(product);
        }
        const howManyInCart = 0; // Add the declaration of 'howManyInCart' variable
    return (
        <div>
                <Button className="bg-walmart hover:bg-walmart/50 text-slate-50" onClick={handleRemove}>-</Button>
        </div>
    )
}

export default RemoveFromCart