import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from  "./pages/Home"
import Login_Page from './pages/Login_Page'
import SignUp_Page from './pages/SignUp_page'
import Layout from './components/common/Layout'
import ApiPage from './pages/ApiPage'
import Logout from './pages/Logout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/login" element={<Login_Page />} />
          <Route path='/signup' element={<SignUp_Page />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ApiPage />} />
          <Route path='/logout' element={<Logout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
