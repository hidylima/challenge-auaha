import searchImg from '../../assets/search.svg'
import { SearchContainer } from "./style";


export function Search() {
  return (
    <SearchContainer>
      <form className="form">
        <input className="input" type="text" placeholder="O que desseja encontra?" />
        <i>
          <img src={searchImg} alt="Pesquisar" />
        </i>
      </form>
    </SearchContainer>
  );
}
