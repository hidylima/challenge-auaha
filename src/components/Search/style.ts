import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 90%;
  grid-area: search;

  @media (min-width: 56.25em) {
    justify-self: baseline;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    grid-area: search;
    padding: var( --gap-min) var( --gap-med);
    border-radius: 1.563rem;
    border: 0;
    background-color: var(--color-light-tamarind);
  
  }

  .input {
    width: 100%;
    
    background-color: transparent;
    border: 0px;
    color: var(--color-tamarind);
    font-weight: 700;

    &::placeholder {
      padding: 0.313rem 0.625rem;
      color: var(--color-tamarind);
      font-weight: 400;
    }
    &:focus {
      border: 0;
      outline: none;
    }
  }
`;
