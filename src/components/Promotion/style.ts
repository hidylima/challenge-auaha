import styled from "styled-components";

export const PromotionContainer = styled.section`
  width: 100%;
  padding: 1rem 6rem;
  position: relative;

   .item {
    overflow: hidden;
  }

  ul {
    width: 150%;
    position: relative;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    display: flex;
    justify-content: space-between;
  }

   li {
    width: 200px;
    flex: 1 1 25%;
    margin: 0 1rem;
    padding: 1rem;
    display: flex ;
    flex-direction:column ;

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
      display: none ;
    }

  }

  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
      display: block;
      width: 100%;

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
      padding: 5px 10px;
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

    strong {
      font-size: 16px;
      color: #000;
      margin: 2px 0 2px 0;
      text-decoration: none;
    }

    span {
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
