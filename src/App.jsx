import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Product from './Components/Products/Product'
import Details from './Components/Details/Details'



function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:categorie' element={<Product/>}/>
        <Route path='/:categorie/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />

    </>
  )
}

export default App;
