import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 90%;
  grid-area: search;

  position: relative;

  @media (min-width: 56.25em) {
    justify-self: baseline;
  }

  .form {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    grid-area: search;
    padding: var(--gap-min) var(--gap-med);
    border-radius: 1.563rem;
    border: 0;
    background-color: var(--color-light-tamarind);
    z-index: 200;
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
  }

  .search-hover {
    width: 100%;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    z-index: 100;
    background-color: #ccc;
    box-shadow: 0px 0px 6px 2px #00000040;
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    &.-active {
      opacity: 1;
    visibility: visible;
    }
  }

  .search-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 30px 30px 10px 30px;
    > .titile {
      font-size: 1rem;
      font-weight: 300;
      color: var(--color-black);
    }
    > .items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      > .item {
        padding: 10px 15px;
        color: var(--color-tamarind);
        font-size: var(--size-half-med);
      }
    }
  }

  .searc-navigation {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    background-color: var(--color-light-tamarind);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .product {
      display: flex;
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .image {
      width: 90px;
      height: 90px;
    }

    .title {
      font-size: var(--size-half-med);
      color: var(--color-black);
      line-height: 1.4;
    }
  }
`;
