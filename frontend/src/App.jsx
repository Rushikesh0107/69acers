import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from  "./pages/Home"
import Login_Page from './pages/Login_Page'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login_Page />} />
      </Routes>
    </>
  )
}

export default App
