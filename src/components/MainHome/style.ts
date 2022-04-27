import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
`

export const Box = styled.ul`
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(  --color-light-tamarind);
  
`

export const Item = styled.li`
  padding: 2rem 4rem;

  img {
    margin-right: 1rem;
  }
  span {
    font-size: 1.25rem;
    font-weight: 400;
  }

  strong { 
    font-weight: 700;
  }

  
`