import MainGraphic from "@/Components/FirstFold/layout";
import ScrollListener from "@/Components/Client/ScrollListener";
import SecondFold from "@/Components/SecondFold/layout";
import ThirdFoldAlt from "@/Components/ThirdFold/ThirdFoldAlt";
// import ThirdFold from "@/Components/ThirdFold/layout";
import FourthFold from "@/Components/FourthFold/layout";
import FifthFold from "@/Components/FifthFold/layout";
import SixthFold from "@/Components/SixthFold/layout";
// import SecondFoldAlt from "@/Components/SecondFold/layout_alt";
import SeventhFold from "@/Components/SeventhFold/layout";
import CarouselScrollListener from "@/Components/Client/CarouselScrollListener";
import SecondFoldAlt from "@/Components/SecondFold/SecondFoldAlt";

export default function Home() {
  return (
    <>   
      <MainGraphic/> 
      {/* <SixthFold/> */}
      <SecondFoldAlt/>
      {/* <SecondFoldAlt/> */}
      <ThirdFoldAlt/>             
      <FifthFold/>
      <FourthFold/>
      {/* <SeventhFold/> */}
      {/* <SecondFold/> */}
      {/* <>
      </> */}      
      <ScrollListener/>       
       {/* <CarouselScrollListener/> */}
    </>
  );
}
