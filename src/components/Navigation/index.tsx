import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationContainer, LoginContainer, MobileContainer } from "./style";
import { MdMenu, MdClose } from "react-icons/md";
import productImg from '../../assets/products/product01.png'

export function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function isMenuOpen() {
    return setShowMobileMenu(!showMobileMenu);
  }

  return (
    <>
      <MobileContainer onClick={isMenuOpen}>
        {!showMobileMenu ? (
          <MdMenu className="open" />
        ) : (
          <MdClose className={showMobileMenu ? "close --active" : ""} />
        )}
      </MobileContainer>

      <NavigationContainer className={showMobileMenu ? "--active" : ""}>
        <LoginContainer>
          <p className="user">Olá, Visitante! Seja Bem-vindo</p>
          <ul className="items">
            <li className="item">
              <Link to="" className="link" onClick={isMenuOpen}>
                Faça seu login
              </Link>
            </li>
            <li className="item">
              <Link to="" className="link" onClick={isMenuOpen}>
                Criar a sua conta
              </Link>
            </li>
          </ul>
        </LoginContainer>

        <ul className="items">
          <li className="item">
            <Link to="#" className="link" onClick={isMenuOpen}>
              Anéis
            </Link>
          </li>

          <li className="item" onClick={isMenuOpen}>
            <Link to="#" className="link">
              Brincos
            </Link>
          </li>

          <li className="item" onClick={isMenuOpen}>
            <Link to="#" className="link">
              Colares
            </Link>
          </li>

          <li className="item" onClick={isMenuOpen}>
            <Link to="#" className="link">
              Pigentes
            </Link>
          </li>

          <li className="item" onClick={isMenuOpen}>
            <Link to="#" className="link">
              Pulseiras
            </Link>
          </li>

          <li className="item" onClick={isMenuOpen}>
            <Link to="#" className="link">
              Kits
            </Link>
          </li>
        </ul>

        <div className="navigation-hover">
          <nav className="items-container">
            <div className="item-wrapper">
              <p className="title">Folhado</p>
              <Link to="" className="link">
                Anel
              </Link>{" "}
              <Link to="" className="link">
                Solitários
              </Link>
              <Link to="" className="link">
                Cristal
              </Link>
              <Link to="" className="link">
                Pérola
              </Link>
              <Link to="" className="link">
                Zircônia
              </Link>
            </div>

            <div className="item-wrapper">
              <p className="title">Prata</p>
              <Link to="" className="link">
                Anel
              </Link>{" "}
              <Link to="" className="link">
                Solitários
              </Link>
              <Link to="" className="link">
                Cristal
              </Link>
              <Link to="" className="link">
                Pérola
              </Link>
              <Link to="" className="link">
                Zircônia
              </Link>
            </div>

            <div className="item-wrapper">
              <p className="title">Ouro</p>
              <Link to="" className="link">
                Anel
              </Link>{" "}
              <Link to="" className="link">
                Solitários
              </Link>
              <Link to="" className="link">
                Cristal
              </Link>
              <Link to="" className="link">
                Pérola
              </Link>
              <Link to="" className="link"> 
                Zircônia
              </Link>
            </div>
            <div className="box">
            <img src={productImg} alt="" className="image" />
            </div>
          </nav>

    
        </div>
      </NavigationContainer>
    </>
  );
}
