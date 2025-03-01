import SelectedProduct from "@/components/selected-product/SelectedProduct";
import FirstPageGifs from "@/components/stories/first-page-gif/FirstPageGif"
import Stories from "@/components/stories/Stories"


export default function Home() {

  return (
    <div>
      <Stories />
      <FirstPageGifs />
      <SelectedProduct/>
    </div>
  );
}
