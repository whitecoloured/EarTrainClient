import Homepage from "./pages/Homepage/Homepage"
import './app.css'
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./Layout"
import Loginpage from "./pages/Loginpage/Loginpage"
import Trainpage from "./pages/Trainpage/Trainpage"
import Registerpage from "./pages/Registerpage/Registerpage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="login" element={<Loginpage/>}/>
          <Route path="register" element={<Registerpage/>}/>
          <Route path="training" element={<Trainpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
