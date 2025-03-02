"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Product } from "../types";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);
    
    const handleRemoveOne = (productId: number) => {

        let updatedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity && existingItem.quantity > 1) {
      existingItem.quantity -= 1; // Decrease quantity by 1
    } else {
      updatedCart = cart.filter((item) => item.id !== productId); // Remove item if quantity is 1
    }
  }

        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(updatedCart)
};

  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  
  return (
    <div className="place-self-center space-y-4 mt-8 border p-2">
      <h1 className="text-2xl font-bold underline underline-offset-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
          <>
        <div>
             {cart.map((item, index) => (
              <div key={index} className="flex border rounded p-2">
                  
                  <Image src={item.image} alt={''} width={50} height={30} />
                  <p className="text-sm">{item.title}</p>
                  <h1 className="bg-slate-300 font-bold ml-1 p-1 rounded">{item.price} $ </h1>
                           <button onClick={() => handleRemoveOne(item.id)}>➖</button>
            </div>
          ))}
          </div>
            <h1>{totalPrice }</h1>
          </>
      )}
    </div>
  );
};

export default CartPage;
