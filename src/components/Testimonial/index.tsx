import React from "react";
import {SectionContainer} from './style'

export const Testimonial = () => {
  return (
    <SectionContainer>
      <h2 className="title">O que os Cliente Dizem</h2>
      <section className="testimonioal-container">
        <figure className="wrapper">
          <figcaption className="legend">
            <cite className="autor">Edi Silva</cite>
          </figcaption>
          <blockquote className="cite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet, quos cumque maiores maxime alias, dicta accusantium, delectus similique aut dolorem. Consectetur velit ad possimus repellendus tempora, laboriosam libero ipsam?.
          </blockquote>
          <span className="data">20/12/2022</span>
        </figure> 

        <figure className="wrapper">
          <figcaption className="legend">
            <cite className="autor">Edi Silva</cite>
          </figcaption>
          <blockquote className="cite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet, quos cumque maiores maxime alias, dicta accusantium, delectus similique aut dolorem. Consectetur velit ad possimus repellendus tempora, laboriosam libero ipsam?.
          </blockquote>
          <span className="data">20/12/2022</span>
        </figure> 

        <figure className="wrapper">
          <figcaption className="legend">
            <cite className="autor">Edi Silva</cite>
          </figcaption>
          <blockquote className="cite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet, quos cumque maiores maxime alias, dicta accusantium, delectus similique aut dolorem. Consectetur velit ad possimus repellendus tempora, laboriosam libero ipsam?.
          </blockquote>
          <span className="data">20/12/2022</span>
        </figure> 
      </section>
    </SectionContainer>
  );
};
