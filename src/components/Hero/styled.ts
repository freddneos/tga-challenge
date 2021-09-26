import styled from 'styled-components';
import Image from 'next/image'
export const HeroContainer = styled.div`
  display:flex;
  justify-content: center;
  max-height: 300px;
  margin-top: -300px;
`;


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
`
export const CardContainer = styled.div`
  display: block;
  min-height: 350px;
  min-width: 200px;
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
