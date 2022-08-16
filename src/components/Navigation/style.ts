import styled from "styled-components";

export const NavigationContainer = styled.nav`
  grid-area: navigation;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 1rem 0;
  position: fixed;
  left: 0;
  top: -5000px;
  background: var(--color-white);
  backdrop-filter: blur(3px);
  transition: all 0.5s ease;
  opacity: 0;
  overflow-y: visible;
  z-index: 1000;

  @media (min-width: 56.25em) {
    max-width: 1000px;
    width: 100%;
    position: relative;
    flex-direction: row;
    justify-content: center;
    opacity: 1;
    left: 0;
    top: 0;
    height: auto;
    backdrop-filter: none;
    border-top: 1px solid #ccc;
    z-index: 100;
  }

  &.--active {
    top: 0;
    opacity: 1;

    @media (min-width: 56.25em) {

    }
  }

  > .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    padding: 0 var(--gap-min);

    @media (min-width: 56.25em) {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    > .item {
      padding: var(--gap-min);

      @media (min-width: 56.25em) {
        padding: 0;
      }

      > .link {
        color: var(--color-light-black);
        font-weight: 700;
        font-size: var(--size-max);

        &:hover {
          color: var(--color-titanium);
        }

        @media (min-width: 56.25em) {
          font-weight: 500;
        }
      }
    }
  }

  .navigation-hover {
    display: none;
    @media (min-width: 56.25em) {
      max-width: 1000px;
      width: 100%;
      position: absolute;
      top: 50px;
      box-shadow: 0px 3px 8px #00000043;
      background-color: #fff;
      transition: 1s all ease;
      opacity: 0;

      .items-container {
        display: flex;
        justify-content: space-around;
      }

      .item-wrapper {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        .title {
          color: var(--color-light-black);
          font-size: 16px;
          font-weight: 600;
        }

        .link {
          color: var(--color-titanium);
          padding: 5px 0;
        }
      }
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 420px;
        height: 330px;
        background-color: var(--color-light-tamarind);
      }
      .image {
        width: 250px;
        height: 250px;
      }
    }
  }

  &:hover .navigation-hover {
    display: block;
    opacity: 1;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: var(--size-max);
  margin-top: 1rem;

  @media (min-width: 56.25em) {
    display: none;
  }

  > .user {
    margin-bottom: 1rem;
  }

  > .items {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;

    > .item > .link {
      background: var(--color-light-black);
      padding: 10px;
      border-radius: 4px;
      color: #fff;
    }
  }
`;

export const MobileContainer = styled.div`
  grid-area: mobile;
  justify-self: self-start;
  display: flex;
  align-items: center;
  cursor: pointer;
  

  transition: all 0.5s 1s ease;

  @media (min-width: 56.25em) {
    display: none;
  }

  .open,
  .close {
    fill: var(--color-black);
    width: 35px;
    height: 35px;
  }

  .close {
    z-index: 1001;
    top: 0;
    position: absolute;
    margin-top: 1rem;
    opacity: 0;
    &.--active {
      opacity: 1;
    }
  }
`;
