import styled from 'styled-components';
import Image from 'next/image'

import breakpoint from '../../styles/breakpoints'
export const HeroContainer = styled.div`
  display:flex;
  justify-content: center;
  max-height: 300px;
  margin-top: -300px;
  @media only screen and ${breakpoint.device.xs}{
        margin-top: -250px;
        align-items: center;
        flex-direction: column;;
    }
`;

export const CardContainer = styled.div`
  display: block;
  min-height: 350px;
  min-width: 200px;
  @media only screen and ${breakpoint.device.xs}{
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

  @media only screen and ${breakpoint.device.xs}{
      width: 100%;
      display: block;
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
justify-content: center;
align-items: center;
b{
  padding-left: 10px;
}
@media only screen and ${breakpoint.device.xs}{
  b{
    display:none
  }
  padding-bottom: 10px;
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
