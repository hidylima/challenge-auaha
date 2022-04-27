import styled from "styled-components";

export const Container = styled.section`
  padding: var(--gap-double-max);

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
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
    object-fit: cover;
    transition: transform 400ms ease-out;
  }

  .gallery-image:hover {
    transform: scale(1.15);
  }
`;
