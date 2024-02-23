"use client";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings"

function AddToCart({product}: {product: Product}) {
    const [cart, addToCart] = useCartStore((state) => [
        state.cart,
        state.addToCart,
    
    ]);
    console.log(cart);
    const howManyInCart = cart.filter(
        (item) => item.meta.sku === product.meta.sku
    ).length;
    console.log(howManyInCart);

    if(howManyInCart > 0){
        <div className="flex space-x-5 items-center">
            <p>-</p>
            <span>{howManyInCart}</span>
        </div>
    }
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart