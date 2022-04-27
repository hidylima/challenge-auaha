import React from "react";
import { UserContainer } from "./style";
import UserImg from "../../assets/user.svg";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <UserContainer>
      <Link to="">
        <img src={UserImg} alt="Minha Conta" />
        Minha Conta
      </Link>

      <div className="loginContainer">
        <ul className="items">
          <li className="item">
            <Link to="" className="link">
              Faça seu login
            </Link>
          </li>

          <li className="item">
            <Link to="" className="link">
              Criar a sua conta
            </Link>
          </li>
        </ul>

        <ul className="items -last">
          <li className="item">
            <Link to="" className="link">
              Minha Conta
            </Link>
          </li>

          <li className="item">
            <Link to="" className="link">
              Meus pedidos
            </Link>
          </li>
        </ul>
      </div>
    </UserContainer>
  );
};
