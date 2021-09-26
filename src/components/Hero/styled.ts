import styled from 'styled-components';
import Image from 'next/image'

import breakpoint from '../../styles/breakpoints'
export const HeroContainer = styled.div`
  display:flex;
  justify-content: center;
  max-height: 500px;
  @media only screen and ${breakpoint.device.sm}{
        max-height: initial;
        align-items: center;
        flex-direction: column;
        min-height: 400px;
    }
`;

export const CardContainer = styled.div`
  display: block;
  min-height: 350px;
  min-width: 200px;
  @media only screen and ${breakpoint.device.sm}{
    display: flex;
    justify-content: center;
    padding-top : 50px ;
    width: 100%;
  }
`

export const InfoContainer = styled.div`
  display: block;
  width: 550px;
  padding-left: 40px;
  h3{
    font-size: 36px;
    padding-bottom: 10px;
  }
  div{
    max-height: 200px;
    overflow: auto;
    ::-webkit-scrollbar
    {
        width: 0px;
    }
    ::-webkit-scrollbar-track-piece
    {
        background-color: transparent;
        -webkit-border-radius: 6px;
    }
  }

  @media only screen and ${breakpoint.device.sm}{
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      h3{
        font-size: 30px;
        padding-bottom: 10px;
      }
    }
`

export const StarsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
b{
  padding-left: 10px;
}
@media only screen and ${breakpoint.device.sm}{
  padding-bottom: 10px;
  padding-top: 20px;
  justify-content: center;
}
`

export const ImageContainer = styled(Image)`
  border-radius: 10px;
  opacity: 0.8;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
  :hover {
    opacity: 1;
    cursor: pointer;
  }

`
