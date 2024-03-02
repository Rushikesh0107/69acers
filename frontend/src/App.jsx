import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from  "./pages/Home"
import Login_Page from './pages/Login_Page'
import SignUp_Page from './pages/SignUp_page'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login_Page />} />
          <Route path='/signup' element={<SignUp_Page />} />
      </Routes>
    </>
  )
}

export default App
