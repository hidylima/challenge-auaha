import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 1rem 0;
  grid-area: navigation;
  overflow-y: visible;
  position: fixed;
  top: 0;
  left: -5000px;
  background: var(--color-white);
  backdrop-filter: blur(3px);
  transition: 1s all ease;
  opacity: 0;
  z-index: 10;

  @media (min-width: 56.25em) {
    width: 100%;
    position: relative;
    flex-direction: row;
    justify-content: center;
    opacity: 1;
    left: 0;
    height: auto;
    backdrop-filter: none;

    border-top: 1px solid #ccc;
  }

  &.--active {
    display: flex;
    left: 0;
    opacity: 1;
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
    z-index: 100;
    right: 8px;
    top: 0;
    position: absolute;
    margin-top: 1rem;
    opacity: 0;
    transition: 1s all ease 1s;
    &.--active {
      opacity: 1;
    }
  }
`;
