import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductProps } from "../products/ProductsList"
import { Button } from "../products/main"
import styled from "styled-components"
import { ThumbNail } from "../products/Product"

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <ReturnBtn onClick={() => navigate(-1)}>목록으로 돌아가기</ReturnBtn>

      {productInfo && (
        <DetailContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <ThumbNail src={productImg} alt={productInfo.title} />
            <ImgList>
              {productInfo.images.map((image, idx) => (
                <Img
                  key={idx}
                  src={image}
                  onClick={() => onClickImg(image)}
                  alt=""
                />
              ))}
            </ImgList>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Product Info
            </h1>
            <table
              style={{ borderSpacing: "10px", borderCollapse: "separate" }}
            >
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
                  <td style={{ verticalAlign: "top" }}>description</td>
                  <td>{productInfo.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DetailContainer>
      )}
    </div>
  )
}

const ReturnBtn = styled(Button)`
  margin: 20px;
`
const DetailContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin-top: 80px;
`
const ImgList = styled.div`
  margin-top: 4px;
`
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 2px;
  cursor: pointer;
`
