import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ProductProps } from "./ProductsList"

export default function Product({
  id,
  thumbnail,
  brand,
  title,
  price,
}: ProductProps) {
  const navigation = useNavigate()
  const onClickProduct = () => {
    navigation(`/detail/${id}`)
  }
  return (
    <Container onClick={onClickProduct}>
      <ThumbNail src={thumbnail} />
      <TitleBox>
        <Brand>{brand}</Brand>
        <Title>{title}</Title>
      </TitleBox>
      <Price>${price}</Price>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 20px);
  padding: 20px;
  cursor: pointer;
`
export const ThumbNail = styled.img`
  width: 300px;
  height: 250px;
  background-color: black;
  color: white;
`
const TitleBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: blue;
    color: white;
  }
`
const Brand = styled.div`
  margin-right: 4px;
`
const Title = styled.div``
const Price = styled.div``
