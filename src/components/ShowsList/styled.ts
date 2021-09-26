import styled from "styled-components";

export const ListContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: -300px;;

`

export const SectionContainer = styled.div`
  margin-bottom: 50px;
  padding-left: ${props => props.theme.padding.simple};
  h2{
    margin-bottom: 20px;
    color: ${props => props.theme.colors.text}
  }
`
