import styled from "styled-components";
import Image from 'next/image'

export const ImageContainer = styled(Image)`
  border-radius: 10px;
  opacity: 0.7;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;

  :hover {
    opacity: 1;
    cursor: pointer;
  }

`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 400px;

  h3 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 200;
  }

`
export const InfoContainer = styled.div`
margin-top: 15px;
height: 50px;
width: 150px;

`
