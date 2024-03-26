import Navbar from "./component/Navbar"
import Home from "./pages/home"
import ManageData from "./pages/manageData"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/manage-data" element={<ManageData />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
