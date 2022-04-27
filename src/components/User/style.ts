import styled from "styled-components";

export const UserContainer = styled.div`
  display: none;
  align-items: center;
  position: relative;

  a {
    color: var(--color-light);
    img {
      margin-right: 10px;
    }
  }

  @media (min-width: 56.25em) {
    display: block;
  }

  .loginContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    font-size: var(--size-med);
    margin-top: var(--size-min);
    width: 200px;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0px 0px 6px 2px #00000040;
    backdrop-filter: blur(10px);

    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    

    &::before {
      content: "";
      border-color: rgba(0, 0, 0, 0);
      border-bottom-color: #fffefe;
      border-style: dashed dashed solid;
      border-width: 0 16px 15px;
      height: 0;
      right: 50%;
      position: absolute;
      top: -13px;
      width: 0;
    }

    > .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: var(--gap-med);
      &.-last {
        background-color: var(--color-light-tamarind);
      }

      > .item {
        padding: var(--gap-min);

        &::nth-child(2n + 1) {
          background: #000;
        }
      }

      > .item > .link {
        padding: var(--gap-min);
        border-radius: 4px;
        color: #000;
      }
    }
  }

  &:hover > .loginContainer {
    opacity: 1;
    visibility: visible;
  }
`;
