import styled from "styled-components";
import breakpoint from '../../styles/breakpoints'

export const ListContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and ${breakpoint.device.sm}{
   justify-content: center;
  }
`

export const SectionContainer = styled.div`
  margin-bottom: 50px;
  padding-left: ${props => props.theme.padding.simple};
  h2{
    margin-bottom: 20px;
    color: ${props => props.theme.colors.text}
  }
  @media only screen and ${breakpoint.device.sm}{
    padding-left:10px;
    h2{
      padding-left: 10px;
      font-size: 18px;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.text}
    }
  }
`
