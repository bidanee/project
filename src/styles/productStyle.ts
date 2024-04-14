import styled from "styled-components"

export const TitleBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 20px);
  padding: 20px;
  cursor: pointer;
  &:hover {
    ${TitleBox} {
      background-color: blue;
      color: white;
    }
  }
`

export const Brand = styled.p`
  margin-right: 4px;
`
