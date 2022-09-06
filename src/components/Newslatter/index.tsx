import React from "react";
import { SectionContainer } from './style';

export const Newslatter = () => {
  return (
    <SectionContainer>
      <h1 className="title">Receba ofertas e novidades</h1>
      <p  className="subtitle">Cadastre-se e receba nossas novidades e promoções</p>
      <form action="" method="post" className="form">
        <input className="input" type="name" name="" id="" placeholder="Seu nome" />
        <input className="input" type="email" name="" id="" placeholder="Seu E-mail" />
        <button className="button" type="submit">Enviar</button>
      </form>
    </SectionContainer>
  );
};
