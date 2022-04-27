import styled from "styled-components";

export const Container = styled.div`
  display: none;
  align-items: center;
  
  @media (min-width: 56.25em) {
    display: block;
  }
  a {
    color: var(--color-light);
    text-decoration: none;
    text-transform: none;
    img {
      margin-right: 10px;
    }
  }
`;
