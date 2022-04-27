import styled from "styled-components";

export const CheckUserCartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-area: checkUserCart;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  justify-self: self-end ;

  @media (min-width: 56.25em) {
    grid-template-columns: 3fr 3fr 1fr;
    align-items: center;
    justify-content: space-between;
    justify-items: stretch;
  }
`;
