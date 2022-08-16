import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;

  /* @media (min-width: 56.25em) {
    top: -10px;
  } */

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
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

  .container-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 5px;
    background: #f1f1f1;
  }
  .dot.active {
    background: rgb(32, 32, 32);
  }
`;

export const Context = styled.div``;
