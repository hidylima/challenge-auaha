import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 50px;
`;

export const PresentationContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 56.1875em) {
    grid-template-columns: repeat(2,1fr);
  }
`;
export const PresentationWrapper = styled.article`
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 56.1875em) {
    margin: 0 15px;
  }

  .action {
    transition: all 1s linear;
    display: flex;
    justify-content: center;
    &:hover .image {
      filter: blur(2px);
    }

    &:hover .title {
      text-shadow: 1px 1px 1px #c1c1c1;
    }
  }
  .presentation {
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    @media (min-width: 56.1875em) {
      margin: 0 15px;
    }
    @media (min-width: 74.9375em) {
      width: 100%;
      max-width: 800px;
      height: auto;
    }
  }
  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
  }

  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Great Vibes", cursive;
    font-size: 6rem;
    color: #fff;
  }
`;
