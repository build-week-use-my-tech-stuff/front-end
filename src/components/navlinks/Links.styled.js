import styled from 'styled-components'

export const NavBar = styled.div`
  a {  
    margin-right: 15px;
    font-size: 14px;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    color: white;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
    }
  }
`