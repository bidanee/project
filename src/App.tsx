import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Detail from "./components/pages/Detail"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
