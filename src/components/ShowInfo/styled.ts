import styled from "styled-components";
import Image from 'next/image'
import breakpoint from '../../styles/breakpoints'


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

  @media only screen and ${breakpoint.device.sm}{
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 700px;
    padding-top: 50px;

    h2 {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 600;
      padding-left: 20px;
      padding-bottom: 20px;
    }

    ul{
      padding-top: 10px;
      padding-bottom: 40px;
      list-style-type:none;
      overflow-y: auto;
      overflow-x: hidden;

      li {
        font-size: 12px;
        margin: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        b {
          width: 100px;
          padding-left: 10px;
          }
        }
    }
}
`

export const ShowInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
  @media only screen and ${breakpoint.device.sm}{
      padding-left: 0px;
      width: 100%;
  }


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
