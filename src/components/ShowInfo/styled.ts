import styled from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  margin-top: 15px;

  ul{
    padding-left: 10px;
    padding-top: 30px;
    max-height: 300px;
    list-style-type:none;
    overflow-x: hidden;
    overflow-y: auto;

    li {
      margin: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      b {
        width: 250px;
        padding-left: 30px;
      }
    }
  }

  h3 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 200;
  }
`

export const ShowInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ImageStyled = styled(Image)`
  border-radius: 50%;
  opacity: 0.8;
  transition: .5s ease;
  backface-visibility: hidden;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`
