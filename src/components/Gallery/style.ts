import styled from "styled-components";

export const Container = styled.section`
  padding: var(--gap-double-max);

  .gallery {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;

    @media (min-width: 37.5em) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 3fr;
    }

    @media (min-width: 56.25em) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 2fr;
    }
  }

  .gallery,
  .gallery-item {
    margin: 0;
  }

  .gallery-item {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--color-light-tamarind);
    margin-bottom: 1rem;
    overflow: hidden;
    cursor: pointer;
    height: 400px;

    &.-full {
      @media (min-width: 37.5em) {
        justify-content: center;
        grid-column: 1 / 3;
      }
      @media (min-width: 56.25em) {
        grid-column: 3;
        grid-row: 1 / 3;
        align-self: stretch;
        height: auto;
      }
    }

    figcaption {
      position: absolute;
      left: 0;
      bottom: 1rem;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.25rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .gallery-image {
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 400ms ease-out;
    object-fit: contain;
    object-position: center;
    padding: 2.5px;
  }

  .gallery-image:hover {
    transform: scale(1.15);
  }
`;
