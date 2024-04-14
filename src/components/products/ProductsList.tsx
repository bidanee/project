import styled from "styled-components"
import { useEffect, useState } from "react"
import Product from "./Product"
import { Button } from "./main"

export interface ProductProps {
  id: number
  thumbnail: string
  brand: string
  title: string
  price: number
}
export default function ProductsList() {
  const [items, setItems] = useState<ProductProps[] | []>([])
  const [skip, setSkip] = useState(0)
  const [showMore, setShowMore] = useState(true)
  const limit = 10
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,thumbnail,brand,title,price`
      )
      const jsonData = await response.json()
      const newItems = jsonData.products

      const total = jsonData.total
      if (newItems.length === 0 || items.length + newItems.length >= total) {
        setShowMore(false)
      }
      setItems((prevItems) => [...prevItems, ...newItems])
      setSkip((prev) => prev + limit)
    } catch (error) {
      console.error("fetchDataError", error)
    }
  }
  const onClickShowMore = () => {
    fetchData()
  }

  return (
    <div>
      <Lists>
        {items.length > 0 &&
          items.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              brand={item.brand}
              title={item.title}
              price={item.price}
            />
          ))}
      </Lists>
      {showMore && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <Button onClick={onClickShowMore}>더보기</Button>
        </div>
      )}
    </div>
  )
}

export const Lists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
