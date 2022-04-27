import { Header } from "../../components/Header";
import { MainHome } from "../../components/MainHome";
import { Navigation } from "../../components/Navigation";
import { ImageSlider } from "../../components/Slider";
import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <ImageSlider />
      {/*<MainHome /> */}
    </HomeContainer>
  );
}
