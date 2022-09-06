import styled from "styled-components";
export const SectionContainer = styled.section`
  padding: calc(8px + 1.5625vw);
  .title {
    font-size: 2rem;
    text-transform: uppercase;
    color: #222;
    text-align: center;
  }
  .subtitle {
    font-size: clamp(0.875rem, 1rem + 5vw, 1rem);
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 12px;
    color: #999;
    text-align: center;
    
    margin-bottom: 2rem;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 720px) {
      flex-direction: row;
      gap: 10px;
    }
    .input {
      border-radius: 25px;
      width: 100%;
      padding: 10px 15px;
      outline-color: #222;
      color: #999;
      background-color: #f8f8f8;
      border: 1px solid;
      @media (min-width: 720px) {
        width: 530px;
      }
    }

    .button {
      padding: 10px 70px;
      color: #fff;
      background-color: #222;
      border-radius: 25px;
      border: 1px solid;
      font-size: 1rem;
      font-weight: 700;
      font-family: "Lato" sans-serif;
    }
  }
`;
