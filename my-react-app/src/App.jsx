import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Course from "./pages/Course/Course"
import NotFound from "./pages/notfound/NotFound"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'




const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="Course" element={<Course/>}/>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App