import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    cursor: pointer;
  }

  > .count {
    position: absolute;
    font-size: 14px;
    font-weight: 700;
    width: 25px;
    height: 25px;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    top: -14px;
    right: -10px;
    text-align: center;
    vertical-align: middle;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .cart {
    position: absolute;
    top: 25px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    font-size: var(--size-med);
    margin-top: var(--size-min);
    width: 300px;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0px 0px 6px 2px #00000040;
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    z-index: 1000;

    transition: all 0.3s ease-in-out;

    &.-active {
      opacity: 1;
    visibility: visible;
    }

    &::before {
      content: "";
      border-color: rgba(0, 0, 0, 0);
      border-bottom-color: #fffefe;
      border-style: dashed dashed solid;
      border-width: 0 16px 15px;
      height: 0;
      right: -1px;
      position: absolute;
      top: -13px;
      width: 0;
    }

    .item {
      display: flex;
    }

    .link {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "image title"
        "image price";
      column-gap: 10px;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--gap-max);
      padding: var(--gap-min);
      color: var(--color-titanium);
      font-size: var(--size-med);

      &:last-child {
        margin-bottom: var(--gap-min);
      }

      .imageCart {
        grid-area: image;
        width: 80px;
        height: 80px;
      }

      .title {
        grid-area: title;
      }

      .wrapper {
        grid-area: price;
        display: flex;
        justify-content: space-between;
        align-self: start;
        padding-right: 30px;
        color: #000;
      }
      .close {
        position: absolute;
        right: 22px;
        top: 38px;
      }
    }
  }

  .box-last {
    background-color: var(--color-light-tamarind);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;

    .price {
      margin-bottom: 16px;
      color: var(--color-tamarind);
      .value {
        color: var( --color-black);
      }
    }

    .finish {
      margin-bottom: 20px;
      padding: 10px 20px;
      background-color: var(--color-black);
      color: var(--color-white);
      border: none;
      border-radius: 20px;
    }
  }
`;
