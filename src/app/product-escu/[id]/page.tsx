import ProductChoice from "@/components/all-products/ProductChoice";

interface ProductProps {
  params: {
    id?: string;
  }
}


const ProductFromAll = ({ params }:ProductProps) => {
  return (<>
      <ProductChoice id={params?.id} />
    </>)
}

export default ProductFromAll