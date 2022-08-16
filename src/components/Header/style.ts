import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  gap: var(--gap-min);
  grid-template-columns: repeat(3, 1fr);

  justify-items: center;
  padding: var(--gap-min) 4%;
  align-items: center;
  margin-bottom: var(--gap-med);
  grid-template-areas:
    "mobile logo  checkUserCart"
    "search search search";

  @media (min-width: 56.25em) {
    grid-template-columns: 3fr 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "search logo  checkUserCart"
      "navigation  navigation navigation ";
    padding: var(--gap-med) 2% var(--gap-min) 2%;
    
  border-bottom: none;
  margin-bottom: 0;
  }
`;
