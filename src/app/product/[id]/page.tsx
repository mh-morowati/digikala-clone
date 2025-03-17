"use client";

import ProductPage from "@/components/selected-product/ProductPage";
import { useParams } from "next/navigation";

const Product = () => {
  const params = useParams();
  const id = params?.id as string;

  if (!id) {
    return <div>Error: Product ID is required.</div>;
  }

  return <ProductPage id={id} />;
};

export default Product;
