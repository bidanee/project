import { useEffect, useState } from "react"

import Product from "./Product"
import ProductsList, { ProductProps } from "./ProductsList"
import { Button, Lists } from "../../styles/commonStyle"
import * as M from "../../styles/mainStyle"

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [items, setItems] = useState<ProductProps[]>([])
  const [noItemMsg, setNoItemMsg] = useState<boolean>(false)

  const onClickSearch = async () => {
    if (searchValue.length === 0) return
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}&select=id,thumbnail,brand,title,price`
      )
      const jsonData = await response.json()
      setItems(jsonData.products)
      setNoItemMsg(jsonData.products.length === 0)
      sessionStorage.setItem("searchValue", searchValue)
      sessionStorage.setItem("items", JSON.stringify(jsonData.products))
    } catch (error) {
      console.error("searchError", error)
    }
  }
  const enterEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearch()
    }
  }
  const onClickTotal = () => {
    setItems([])
    setSearchValue("")
    sessionStorage.setItem("scrollPosition", "0")
    sessionStorage.setItem("searchValue", "")
    sessionStorage.setItem("items", "")
  }
  useEffect(() => {
    const getSearchValue = sessionStorage.getItem("searchValue") || ""
    const getItemsJSON = sessionStorage.getItem("items")
    const getItems = getItemsJSON ? JSON.parse(getItemsJSON) : []
    setSearchValue(getSearchValue)
    setItems(getItems)

    const getScrollPosition = sessionStorage.getItem("scrollPosition") || "0"
    window.scrollTo({
      top: parseInt(getScrollPosition),
      left: 0,
      behavior: "auto",
    })
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString())
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div>
      <M.SearchBox>
        <M.Input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={enterEvent}
        />
        <Button type="button" onClick={onClickSearch}>
          검색
        </Button>
        <Button onClick={onClickTotal}>전체보기</Button>
      </M.SearchBox>
      {items.length !== 0 ? (
        <Lists>
          {items.map((item) => (
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
      ) : noItemMsg ? (
        <p>아이템없음</p>
      ) : (
        <ProductsList />
      )}
    </div>
  )
}
