import { useNavigate } from "react-router-dom"
import { ProductProps } from "./ProductsList"
import { ThumbNail } from "../../styles/commonStyle"
import * as P from "../../styles/productStyle"

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
    <P.Container onClick={onClickProduct}>
      <ThumbNail src={thumbnail} />
      <P.TitleBox>
        <P.Brand>{brand}</P.Brand>
        <p>{title}</p>
      </P.TitleBox>
      <p>${price}</p>
    </P.Container>
  )
}
