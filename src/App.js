import './App.css';
import About from "../src/Component/Pages/About/about"
import OneColumn from "../src/Component/Pages/Blogs/one_column"
import TwoColumn from "../src/Component/Pages/Blogs/two_column"
import SidebarBlog from "../src/Component/Pages/Blogs/sidebar_blog"
import Contact from "../src/Component/Pages/Contact/contact"
import Home from "./Component/Pages/Home/home"
import Menu from './Component/Pages/Menu/menu';

import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog/one-column' element={<OneColumn />} />
        <Route path='/blog/two-column' element={<TwoColumn />} />
        <Route path='/blog/sidebar' element={<SidebarBlog />} />
      </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
