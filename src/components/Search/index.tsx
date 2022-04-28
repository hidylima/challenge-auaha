import {useState} from 'react';
import searchImg from "../../assets/search.svg";
import { SearchContainer } from "./style";
import { Link } from "react-router-dom";
import Product01 from "../../assets/products/product01.png";
export function Search() {

  const [activeSearch, seActiveSearch] = useState(false)

  function isOpenSearch() {
    return seActiveSearch(!activeSearch);
  }

  return (
    <SearchContainer>
      <form className="form">
        <input 
          className="input"
          type="text"
          placeholder="O que desseja encontra?"
          required 
          onFocusCapture={isOpenSearch}
        />
        <i>
          <img src={searchImg} alt="Pesquisar" />
        </i>
      </form>

      <div className={activeSearch ? "search-hover -active": "search-hover"}>
          <div className="search-header">
            <h2 className="title">Sugestões</h2>
            <ul className="items">
              <li className="item">Brico</li>
              <li className="item">Brico Ouro</li>
              <li className="item">Brico Prata</li>
            </ul>
          </div>

          <nav className="searc-navigation">
            <Link to="" className="product">
              <figure className="item">
                <img className="image" src={Product01} alt="" />
                <figcaption className="title">ANEL BANHADO OURO RETO COM ZIRCONIA</figcaption>
              </figure>
            </Link>

            <Link to="" className="product">
              <figure className="item">
                <img className="image" src={Product01} alt="" />
                <figcaption className="title">ANEL BANHADO OURO RETO COM ZIRCONIA</figcaption>
              </figure>
            </Link>
          </nav>
        </div>

    </SearchContainer>
  );
}
