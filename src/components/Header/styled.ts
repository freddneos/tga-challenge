import styled from "styled-components";
import breakpoint from '../../styles/breakpoints'

export const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  background: linear-gradient(3deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(130,87,230,1) 100%);
  padding: ${props => props.theme.padding.simple};
  height: ${props=>props.size || '500px'};
  color: ${props => props.theme.colors.text};

  h1 {
    font-size: 36px;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    font-family: 'Lexend', sans-serif;
  }
  p{
    margin-top: 20px;
  }
   @media only screen and ${breakpoint.device.sm}{
    h1 {
      font-size: 26px;
      font-weight: 600;
      color: ${props => props.theme.colors.text};
      font-family: 'Lexend', sans-serif;
    }
    p{
      margin-top: 10px;
    }
    padding: 20px;
}
`
export const LinkStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  a{
    color:${props => props.theme.colors.text};
      text-decoration: none;
  }
`
