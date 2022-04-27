import React from "react";
import { Container } from "./style";
import telefoneImg from "../../assets/telephone.svg";

export const Informative = () => {
  return (
    <Container>
      <a href="tel:+99999-9999">
        <img src={telefoneImg} alt="Telefone" />
        (14)998797682
      </a>
    </Container>
  );
};
