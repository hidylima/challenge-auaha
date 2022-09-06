import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: calc(8px + 1.5625vw);
  .title {
    font-size: 2rem;
    text-transform: uppercase;
    color: #222;
    text-align: center;
    margin-bottom: 1rem;
  }
  .testimonioal-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 720px) {
      flex-direction: row;
      gap: 20px;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-light-tamarind);
      margin-bottom: 1.25rem;
      border-radius: 10px;
      text-align: center;
      padding: 15px 20px;
      font-family: "Lato", sans-serif;
    }

    .legend {
      margin-bottom: 0.625rem;
    }

    .autor {
      font-weight: 700;
      font-style: 400;
      font-size: clamp(1rem, 1rem + 5vw, 1rem);
    }

    .cite,
    .data {
      font-size: clamp(0.875rem, 1rem + 5vw, 1rem);
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 12px;
    }

    .data {
      margin-bottom: 0;
      color: #999;
    }
  }
`;
