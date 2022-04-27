import React from "react";
import { CartContainer } from "./style";
import cartImg from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart, MdClose } from "react-icons/md";
import Product01 from "../../assets/products/product01.png";

export const Cart = () => {
  return (
    <CartContainer>
      <img className="image" src={cartImg} alt="Carrinho" />
      <span className="count">0</span>

      <div className="cart">
        <ul className="items">
          <li className="item">
            {/* <Link to="" className="link">
              <MdOutlineAddShoppingCart className="imageCart" />
              Carrinho vazio
            </Link> */}

            <Link to="" className="link">
              <img src={Product01} alt="" className="imageCart" />
              <p className="title">Anél foliado a ouro 18k</p>
              <div className="wrapper">
                <p className="amount">Qtd. 1</p>
                <span className="value">R$0,00</span>
              </div>
            <MdClose className="close" />
            </Link>
            
          </li>

          <li className="item">
            {/* <Link to="" className="link">
              <MdOutlineAddShoppingCart className="imageCart" />
              Carrinho vazio
            </Link> */}

            <Link to="" className="link">
              <img src={Product01} alt="" className="imageCart" />
              <p className="title">Anél foliado a ouro 18k</p>
              <div className="wrapper">
                <p className="amount">Qtd. 1</p>
                <span className="value">R$0,00</span>
              </div>
            <MdClose className="close" />
            </Link>
            
          </li>

          <li className="item">
            {/* <Link to="" className="link">
              <MdOutlineAddShoppingCart className="imageCart" />
              Carrinho vazio
            </Link> */}

            <Link to="" className="link">
              <img src={Product01} alt="" className="imageCart" />
              <p className="title">Anél foliado a ouro 18k</p>
              <div className="wrapper">
                <p className="amount">Qtd. 1</p>
                <span className="value">R$0,00</span>
              </div>
            <MdClose className="close" />
            </Link>
            
          </li>
        </ul>

        <div className="box-last">
          <p className="price">
            Subtotal <span className="value">R$0,00</span>
          </p>

          <button className="finish">Finalizar compra</button>
        </div>
      </div>
    </CartContainer>
  );
};
