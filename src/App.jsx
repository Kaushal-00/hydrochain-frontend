import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import DataTable from "./components/DataTable"
import PlantDashboard from "./Pages/PlantDashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/plant/dashboard" element={<PlantDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App