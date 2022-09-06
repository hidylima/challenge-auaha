import { Header } from "../../components/Header";
import { ImageSlider } from "../../components/Slider";
import { Gallery } from "../../components/Gallery";
import { Promotion } from "../../components/Promotion";
import { Presentation } from "../../components/Presentation";
import { HomeContainer, Box, Container, Item } from "./style";
import freightImg from "../../assets/freight-icon.svg";
import cardImg from "../../assets/card-credit.svg";
import { Testimonial } from "../../components/Testimonial";
import { Newslatter } from "../../components/Newslatter";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <ImageSlider />
      <Container>
        <Box>
          <Item>
            <img
              src={freightImg}
              alt="Frete grátis nas compras acima de R$ 299,00"
            />
            <span>
              {" "}
              <strong>Frete grátis</strong> nas compras acima de R$ 299,00
            </span>
          </Item>

          <Item>
            <img src={cardImg} alt="Até 6 vezes no cartão de crédito" />
            <span>
              {" "}
              <strong>Até 6 vezes</strong> sem juros no cartão de crédito
            </span>
          </Item>
        </Box>
        <Gallery />
        <Promotion />
        <Presentation />
        <Testimonial />
        <Newslatter />
      </Container>

      <Footer />
    </HomeContainer>
  );
}
