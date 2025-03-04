import ProductPage from "@/components/selected-product/ProductPage";

interface ProductProps {
  params?: {
    id?: string;
  }
}


const Product = ({ params }:ProductProps) => {
    return (<>
    <ProductPage id={params?.id ?? ""} />
    </>)
}

export default Product