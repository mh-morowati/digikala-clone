import SelectedProduct from "@/components/selected-product/SelectedProduct";
import FirstPageGifs from "@/components/stories/first-page-gif/FirstPageGif"
import Stories from "@/components/stories/Stories"
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";


export default function Home() {

  return (
    <div>
      <Stories />
      <FirstPageGifs />
      <SelectedProduct />
      <Link href={"/products-list"}>
       <h1
        className="w-full h-32 border rounded my-8 place-self-center flex items-center place-content-center bg-red-500 text-white text-3xl"
      >
        get all product
        <FaArrowCircleRight />
        </h1>
      </Link>
    </div>
  );
}
