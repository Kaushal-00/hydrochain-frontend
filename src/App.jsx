import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import CreditBalanceCard from "./components/CreditBalanceCard"
import IoTDataFeedCard from "./components/IoTDataFeedCard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={
            <div className="flex justify-center">
              <IoTDataFeedCard />
              <CreditBalanceCard current={560}
                pending={120}
                lifetime={2450} />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App