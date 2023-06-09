import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav1 from './Units/Nav1';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Order from './Pages/Order'
import Payment from './Pages/Payment'
import ProductListing from './Pages/ProductListing'
import Registration from './Pages/Registration'
import Userdetails from './Pages/Userdetails'

export default function App() {
  return (
    <div>
      <Nav1></Nav1>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Order" element={<Order />} />
    <Route path="/Payment" element={<Payment />} />
    <Route path="/ProductListing" element={<ProductListing />} />
    <Route path="/Registration" element={<Registration />} />
    <Route path="/Userdetails" element={<Userdetails />} />
 </Routes>
 </div>
  )
}



