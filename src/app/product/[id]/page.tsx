import ProductPage from "@/components/selected-product/ProductPage";

interface ProductProps {
  params: {
    id: string;
  }
}


const Product = async ({ params }: Awaited<ProductProps>) => {
  
  if (!params?.id) {
    return <div>Error: Product ID is required.</div>;
  }

    return (<>
    <ProductPage id={params.id} />
    </>)
}

export default Product