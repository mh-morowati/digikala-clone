"use client"
import Loading from '@/app/loading';
import { apiServices } from '@/lib/api/Services';
import { addToast, Button } from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Product } from '../types';

type Props = {
    id: string
}

const ProductPage = ({id}: Props) => {

       const {
    data: product ,
    isLoading: isloading,
    isError: iserror
  } = useQuery<Product>({
    queryKey: ["Product",id],
    queryFn: () => apiServices.getProduct(id),
    refetchOnMount: false  // Prevent refetch on component mount
  })
    
     const handleAddToCart = (product: Product) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

       
  if (!Array.isArray(cart)) {
    cart = [];
       }
       
  const existingItem = cart.find((item: Product) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity instead of adding duplicate
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new item with quantity
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  addToast({
    description: "Product added to cart!",
    color: "success",
  });
};

   if (isloading) {
    return Loading()
  }

  if (!product) {
    return Loading()
  }
  
  if (iserror) {
    console.log(iserror)
  }

    return (<div className='place-self-center space-y-4 mt-8 border p-2'>
        <h1 className='font-bold font-sans text-xl'>{product.title}</h1>
        <Image src={product.image} alt={''} width={200} height={100} />
        <h1 className='font-bold text-xl bg-slate-200 inline-flex rounded p-3'>{product.price} $</h1>
        <p className='w-96 text-sm'>{product.description}</p>
        <Button className='w-96 text-lg' color='warning' radius='full' onClick={() => handleAddToCart(product)}>
            Add to cart
        </Button>
    </div>)
}

export default ProductPage