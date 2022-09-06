import styled from "styled-components";

export const PromotionContainer = styled.section`
  width: 100%;
  padding: calc(8px + 1.5625vw);
  position: relative;

  .items {
    display: block;
    position: relative;
    width: 100%;
    max-width: 37.4375em;
    overflow: hidden;
  }

  .elements {
    width: 100%;
    display: flex;
  }

  .promotion {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    background-color: lemonchiffon;
    transition: 1s;
    opacity: 1;
    border: 1px solid #000;

    &.-active {
      opacity: 1;
    }

    .spy {
      position: absolute;
      top: 123px;
      z-index: 100;
      text-align: center;
      background: red;
      display: inline-block;
      width: 100px;
      border-radius: 10px;
      padding: 5px;
      font-size: 16px;
      font-weight: 500;
      margin: 0 auto;
    }

    .addBag {
      background-color: rgb(0, 0, 0);
      color: white;
      font-size: 12px;
      font-weight: 700;
      margin: 5px;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
    }

    &:hover .addBag {
      display: none;
    }
  }

  .action {
    position: relative;
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 6px;
    overflow: hidden;

    .image {
      display: block;
      width: 310px;
      height: 310px;
      object-fit: contain;
      object-position: center;

      &::before {
        display: block;
        content: " ";
        background: rgba(247, 247, 247, 0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:hover:before {
        background: rgba(247, 247, 247, 0.5);
        transition: all 0.2s;
      }
    }
  }

  .informative {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5px;

    span {
      background-color: #000;
      margin: 5px;
      border-radius: 25px;
      padding: 5px 20px;
      border: none;
      color: white;
      font-size: 12px;
      font-weight: 700;
      text-transform: capitalize;

      &:last-child {
        background: #ccc;
      }
    }
  }

  .description {
    margin-bottom: 10px;
    font-size: 16px;
    color: #000;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: #ccc;

    .newPrice {
      font-size: 16px;
      color: #000;
      margin: 2px 0 2px 0;
      text-decoration: none;
    }

    .installments {
      font-size: 14px;
      color: #000;
      font-weight: 400;
      text-decoration: none;
    }
  }

  .btn-slide {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: transparent;
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-slide .icon {
    width: 50px;
    height: 50px;
    pointer-events: none;
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
`;

export const Context = styled.div``;
