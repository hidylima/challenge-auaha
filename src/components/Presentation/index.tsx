import React from "react";
import {
  PresentationWrapper,
  SectionContainer,
  PresentationContainer,
} from "./style";
import { BrowserRouter as Router, Link } from "react-router-dom";
import highlightsImg from "../../assets/presetation/destaques.png";
import newsImg from "../../assets/presetation/novidades.png";

export function Presentation() {
  return (
    <Router>
      <SectionContainer>
        <PresentationContainer>
          <PresentationWrapper>
            <Link to="#" className="action">
              <figcaption className="presentation">
                <img
                  className="image"
                  src={newsImg}
                  alt="imagem destaque da loja"
                />
                <figcaption className="title">Novidades</figcaption>
              </figcaption>
            </Link>
          </PresentationWrapper>

          <PresentationWrapper>
            <Link to="#" className="action">
              <figcaption className="presentation">
                <img
                  className="image"
                  src={highlightsImg}
                  alt="imagem destaque da loja"
                />
                <figcaption className="title">Destaques</figcaption>
              </figcaption>
            </Link>
          </PresentationWrapper>
        </PresentationContainer>
      </SectionContainer>
    </Router>
  );
}
