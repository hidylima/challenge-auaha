import React, { FormEvent, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BtnSlider } from "./Button";
import { PromotionContainer } from "./style";

const promotionDate = [
  {
    id: "94313731",
    name: "Tênis Nike Revolution 5 Max",
    price: 249.99,
    oldPrice: 349.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg",
  },
  {
    id: "94313762",
    name: "Tênis Nike Revolution 5",
    price: 249.99,
    oldPrice: 349.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94313762.jpg",
  },

  {
    id: "943137XQ",
    name: "Tênis Nike Revolution 5",
    price: 249.99,
    oldPrice: 349.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/943137XQ.jpg",
  },
  {
    id: "95077714",
    name: "Tênis Asics Patriot 12 Noosa",
    price: 199.99,
    oldPrice: 279.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95077714.jpg",
  },
  {
    id: "9507779N",
    name: "Tênis Asics Patriot 12 Noosa",
    price: 199.99,
    oldPrice: 279.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/9507779N.jpg",
  },
  {
    id: "92601102",
    name: "Tênis Oakley Modoc Low 3.0",
    price: 449.99,
    oldPrice: 559.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/92601102.jpg",
  },
  {
    id: "9465450R",
    name: "Tênis Nike Renew Run",
    price: 279.99,
    oldPrice: 399.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/9465450R.jpg",
  },
  {
    id: "95004531",
    name: "Tênis Nike Quest 3",
    price: 299.99,
    oldPrice: 449.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95004531.jpg",
  },
  {
    id: "94672705",
    name: "Tênis adidas Lite Racer 20",
    price: 179.99,
    oldPrice: 229.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94672705.jpg",
  },
  {
    id: "92456602",
    name: "Tênis Infantil Puma Wired",
    price: 179.99,
    oldPrice: 209.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/92456602.jpg",
  },
  {
    id: "94461431",
    name: "Tênis Infantil Nike Flex Runner",
    price: 279.99,
    oldPrice: null,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94461431.jpg",
  },
  {
    id: "95850662",
    name: "Tênis adidas Runfalcon 2.0",
    price: 199.99,
    oldPrice: 279.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95850662.jpg",
  },
  {
    id: "943137X8",
    name: "Tênis Nike Revolution 5",
    price: 249.99,
    oldPrice: 349.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/943137X8.jpg",
  },
  {
    id: "93227802",
    name: "Tênis Infantil Puma Wired",
    price: 159.99,
    oldPrice: 189.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/93227802.jpg",
  },
  {
    id: "93828502",
    name: "Tênis Infantil Nike Pico 5 Baby",
    price: 139.99,
    oldPrice: 179.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/93828502.jpg",
  },

  {
    id: "95150929",
    name: "Tênis Asics Patriot 12",
    price: 199.99,
    oldPrice: 259.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95150929.jpg",
  },
  {
    id: "95870805",
    name: "Tênis Asics Gel-Pacemaker",
    price: 299.99,
    oldPrice: 399.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95870805.jpg",
  },
  {
    id: "95707805",
    name: "Tênis Mizuno Wave Prophecy X",
    price: 1299.99,
    oldPrice: 1499.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95707805.jpg",
  },
  {
    id: "94672719",
    name: "Tênis adidas Lite Racer 20",
    price: 179.99,
    oldPrice: 229.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94672719.jpg",
  },
  {
    id: "95876431",
    name: "Tênis Asics Gel-Nagoya 3",
    price: 299.99,
    oldPrice: 379.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95876431.jpg",
  },

  {
    id: "95707845",
    name: "Tênis Mizuno Wave Prophecy X",
    price: 1299.99,
    oldPrice: 1499.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95707845.jpg",
  },
  {
    id: "946545OX",
    name: "Tênis Nike Renew Run",
    price: 279.99,
    oldPrice: 399.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/946545OX.jpg",
  },
  {
    id: "9465450M",
    name: "Tênis Nike Renew Run",
    price: 279.99,
    oldPrice: 399.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/9465450M.jpg",
  },
  {
    id: "95939145",
    name: "Tênis Fila Grand Prix",
    price: 199.99,
    oldPrice: 249.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95939145.jpg",
  },
  {
    id: "95326905",
    name: "Tênis Fila Recovery",
    price: 259.99,
    oldPrice: 299.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95326905.jpg",
  },
  {
    id: "951509X8",
    name: "Tênis Asics Patriot 12",
    price: 199.99,
    oldPrice: 259.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/951509X8.jpg",
  },
  {
    id: "9515093X",
    name: "Tênis Asics Patriot 12",
    price: 199.99,
    oldPrice: 259.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/9515093X.jpg",
  },
  {
    id: "9590484W",
    name: "Tênis Puma Anzarun SR BDP",
    price: 229.99,
    oldPrice: 329.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/9590484W.jpg",
  },
  {
    id: "943137D0",
    name: "Tênis Nike Revolution 5",
    price: 249.99,
    oldPrice: 349.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/943137D0.jpg",
  },
  {
    id: "9465459P",
    name: "Tênis Nike Renew Run",
    price: 279.99,
    oldPrice: 399.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/9465459P.jpg",
  },
  {
    id: "94218131",
    name: "Tênis Infantil Nike Court Borough Low 2",
    price: 199.99,
    oldPrice: 299.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94218131.jpg",
  },
  {
    id: "95707858",
    name: "Tênis Mizuno Wave Prophecy X",
    price: 1299.99,
    oldPrice: 1499.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95707858.jpg",
  },
  {
    id: "94876962",
    name: "Tênis adidas Lite Racer 2.0",
    price: 179.99,
    oldPrice: 249.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94876962.jpg",
  },
  {
    id: "94313703",
    name: "Tênis Nike Revolution 5",
    price: 249.99,
    oldPrice: 349.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/94313703.jpg",
  },

  {
    id: "93761902",
    name: "Tênis Oakley Modoc 2.0",
    price: 449.99,
    oldPrice: 649.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/93761902.jpg",
  },
  {
    id: "95150919",
    name: "Tênis Asics Patriot 12",
    price: 199.99,
    oldPrice: 259.99,
    image: "https://imgcentauro-a.akamaihd.net/230x230/95150919.jpg",
  },
];

export const Promotion = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== promotionDate.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === promotionDate.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(promotionDate.length);
    }
  };

  const moveDot = (index: React.SetStateAction<number>) => {
    setSlideIndex(index);
  };

  return (
    <PromotionContainer>
      <Router>
        <div className="item">
          <ul>
            <li className="promotion">
              <Link to="" className="wrapper">
                <span className="spy">Espiar</span>
                <img
                  src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                  alt=""
                />

                <div className="informative">
                  <span>Mais vendido</span>
                  <span>Frente Grátis</span>
                </div>

                <p className="description">Anel Banhado a Ouro com Zicronia</p>
                <div className="box">
                  <p className="price">
                    de R$ 299,00 <strong>Por R$ 99,00</strong>
                    <span>6x R$ 31,00 sem juros </span>
                  </p>
                </div>
              </Link>

              <button className="addBag">Adicionar à sacola</button>
            </li>

            <li className="promotion">
              <Link to="" className="wrapper">
                <img
                  src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                  alt=""
                />

                <div className="informative">
                  <span>Mais vendido</span>
                  <span>Frente Grátis</span>
                </div>
                <p className="description">Anel Banhado a Ouro com Zicronia</p>
                <div className="box">
                  <p className="price">
                    de R$ 299,00 <strong>Por R$ 99,00</strong>
                    <span>6x R$ 31,00 sem juros </span>
                  </p>
                </div>
              </Link>
            </li>

            <li className="promotion">
              <Link to="" className="wrapper">
                <img
                  src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                  alt=""
                />

                <div className="informative">
                  <span>Mais vendido</span>
                  <span>Frente Grátis</span>
                </div>
                <p className="description">Anel Banhado a Ouro com Zicronia</p>
                <div className="box">
                  <p className="price">
                    de R$ 299,00 <strong>Por R$ 99,00</strong>
                    <span>6x R$ 31,00 sem juros </span>
                  </p>
                </div>
              </Link>
            </li>

            <li className="promotion">
              <Link to="" className="wrapper">
                <img
                  src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                  alt=""
                />

                <div className="informative">
                  <span>Mais vendido</span>
                  <span>Frente Grátis</span>
                </div>
                <p className="description">Anel Banhado a Ouro com Zicronia</p>
                <div className="box">
                  <p className="price">
                    de R$ 299,00 <strong>Por R$ 99,00</strong>
                    <span>6x R$ 31,00 sem juros </span>
                  </p>
                </div>
              </Link>
            </li>

            <li className="promotion">
              <Link to="" className="wrapper">
                <img
                  src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                  alt=""
                />

                <div className="informative">
                  <span>Mais vendido</span>
                  <span>Frente Grátis</span>
                </div>
                <p className="description">Anel Banhado a Ouro com Zicronia</p>
                <div className="box">
                  <p className="price">
                    de R$ 299,00 <strong>Por R$ 99,00</strong>
                    <span>6x R$ 31,00 sem juros </span>
                  </p>
                </div>
              </Link>
            </li>

            <li className="promotion">
              <Link to="" className="wrapper">
                <img
                  src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                  alt=""
                />

                <div className="informative">
                  <span>Mais vendido</span>
                  <span>Frente Grátis</span>
                </div>
                <p className="description">Anel Banhado a Ouro com Zicronia</p>
                <div className="box">
                  <p className="price">
                    de R$ 299,00 <strong>Por R$ 99,00</strong>
                    <span>6x R$ 31,00 sem juros </span>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </Router>
    </PromotionContainer>
  );
};
