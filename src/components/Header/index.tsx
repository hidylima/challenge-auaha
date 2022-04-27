import { BrowserRouter as Router } from "react-router-dom";
import { CheckUserCart } from "../CheckUserCarT";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { Search } from "../Search";
import { HeaderContainer } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <Router>
        <Navigation />
        <Logo />
        <CheckUserCart />
        <Search />
      </Router>
    </HeaderContainer>
  );
}
