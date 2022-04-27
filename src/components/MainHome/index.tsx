import { Gallery } from "../Gallery";

import freightImg from '../../assets/freight-icon.svg'
import cardImg from '../../assets/card-credit.svg'
import { Box, Container, Item } from "./style";
import { Promotion } from "../Promotion";

export function MainHome() {
  return (
    <Container>
      <Box>
        <Item>
          <img src={freightImg} alt="Frete grátis nas compras acima de R$ 299,00" />
          <span> <strong>Frete grátis</strong> nas compras acima de R$ 299,00</span>
        </Item>

        <Item>
          <img src={cardImg} alt="Até 6 vezes no cartão de crédito" />
          <span> <strong>Até 6 vezes</strong> sem juros
            no cartão de crédito</span>
        </Item>

      </Box>
      <Gallery />
      <Promotion />
    </Container>
  );
}
