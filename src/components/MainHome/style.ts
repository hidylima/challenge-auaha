import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-light-tamarind);

  @media (min-width: 37.4375em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Item = styled.li`
  padding: 1rem 2rem;
  display: flex;
  @media (min-width: 37.4375em) {
    padding: 2rem 4rem;
  }

  img {
    margin-right: 1rem;
  }
  span {
    font-size: 1.25rem;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }
`;
