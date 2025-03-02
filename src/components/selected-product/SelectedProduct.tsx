"use client"
import Loading from '@/app/loading'
import { apiServices } from '@/lib/api/Services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

const SelectedProduct = () => {

      const {
    data: products = [],
    isLoading: isloading,
    isError: iserror
  } = useQuery<any[]>({
    queryKey: ["selectedProducts"],
    queryFn: () => apiServices.getSelectedProduct(),
    refetchOnMount: false  // Prevent refetch on component mount
  })
    
  if (isloading) {
    return Loading()
  }
    return (<div
        className=
        "bg-red-600 w-[99%] h-72 mt-12 rounded place-self-center flex overflow-x-auto overflow-y-hidden place-items-center"
    >
       {products && products.map((product) => (
           <Link key={product.id} href={`/product/${product.id}`}>
                 <div key={product.id} className="bg-white p-2 min-w-36 border-b h-60 mx-1 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
                   className="w-16 h-16 rounded"
                   width={70}
                   height={50}
            />
            <h3 className="text-sm">{product.title}</h3>
            <p className='text-sm font-bold'>Price: {product.price} $</p>
               </div>
               </Link>
        ))}
    </div>)
}

export default SelectedProduct