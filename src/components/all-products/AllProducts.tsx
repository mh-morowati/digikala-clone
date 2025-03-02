"use client"
import Loading from '@/app/loading';
import { apiServices } from '@/lib/api/Services';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image'


const AllProducts = () => {

        const {
    data: allProducts = [],
    isLoading: isloading,
    isError: iserror
  } = useQuery<any[]>({
    queryKey: ["selectedProducts"],
    queryFn: () => apiServices.getAllProducts(),
    refetchOnMount: false  // Prevent refetch on component mount
  })
    
  if (isloading) {
    return Loading()
    }
    
    return (<>
    {allProducts && allProducts.map((product) => (
           <Link key={product.id} href={`/product-escu/${product.id}`}>
                 <div key={product.id} className="bg-white p-2 min-w-36 border-b h-60 mx-1 overflow-hidden">
            <Image
              src={product.category.image}
              alt={product.title}
                   className="w-16 h-16 rounded"
                   width={70}
                   height={50}
            />
            <h3 className="text-sm">{product.title}</h3>
            <p className='text-sm font-bold'>Price: {product.price} $</p>
               </div>
               </Link>
        ))}</>)
}

export default AllProducts