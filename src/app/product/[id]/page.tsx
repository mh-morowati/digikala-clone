import ProductPage from "@/components/selected-product/ProductPage";
import { FC } from "react";

interface ProductProps {
  params: {
    id: string;
  }
}


const Product: FC<ProductProps> = ({ params }) => {
  
  if (!params?.id) {
    return <div>Error: Product ID is required.</div>;
  }

    return (
      <ProductPage id={params.id} />
    )
}

export default Product