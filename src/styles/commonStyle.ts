import styled from "styled-components"

export const Lists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Button = styled.button`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 2px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    position: relative;
    top: 2px;
  }
`
export const ThumbNail = styled.img`
  width: 300px;
  height: 250px;
  background-color: black;
  color: white;
`
