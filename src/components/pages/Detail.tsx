import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductProps } from "../products/ProductsList"
import { ThumbNail } from "../../styles/commonStyle"
import * as D from "../../styles/DetailStyle"

interface ProductInfo extends ProductProps {
  description: string
  images: string[]
}

export default function Detail() {
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null)
  const [productImg, setProductImg] = useState<string | undefined>("")
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const jsonData = await response.json()
      setProductInfo(jsonData)
      setProductImg(jsonData.thumbnail)
    } catch (error) {
      console.error("Get ProductInfo error", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const onClickImg = (image: string) => {
    setProductImg(image)
  }
  return (
    <D.Container>
      <D.ReturnBtn onClick={() => navigate(-1)}>목록으로 돌아가기</D.ReturnBtn>

      {productInfo && (
        <D.DetailContainer>
          <D.ImgBox>
            <ThumbNail src={productImg} alt={productInfo.title} />
            <D.ImgList>
              {productInfo.images.map((image, idx) => (
                <D.Img
                  key={idx}
                  src={image}
                  onClick={() => onClickImg(image)}
                  alt=""
                />
              ))}
            </D.ImgList>
          </D.ImgBox>
          <D.InfoBox>
            <D.InfoTitle>Product Info</D.InfoTitle>
            <D.Table>
              <tbody>
                <tr>
                  <td>brand</td>
                  <td>{productInfo.brand}</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>{productInfo.title}</td>
                </tr>
                <tr>
                  <td>price</td>
                  <td>${productInfo.price}</td>
                </tr>
                <tr>
                  <D.Td style={{ verticalAlign: "top" }}>description</D.Td>
                  <td>{productInfo.description}</td>
                </tr>
              </tbody>
            </D.Table>
          </D.InfoBox>
        </D.DetailContainer>
      )}
    </D.Container>
  )
}
