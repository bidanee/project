import styled from "styled-components"
import { Button } from "./commonStyle"

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Container = styled(FlexColumn)`
  margin-top: 30px;
`
export const ReturnBtn = styled(Button)`
  margin: 20px;
`
export const ImgBox = styled(FlexColumn)`
  margin-right: 20px;
`
export const DetailContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin-top: 80px;
`
export const ImgList = styled.div`
  margin-top: 4px;
`
export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 2px;
  cursor: pointer;
`
export const InfoBox = styled(FlexColumn)`
  margin-top: 20px;
  margin-left: 20px;
`
export const InfoTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
`
export const Table = styled.table`
  border-spacing: 10px;
  border-collapse: separate;
`
export const Td = styled.td`
  vertical-align: top;
`
