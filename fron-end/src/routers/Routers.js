import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'



import Home from '../pages/Home/Home'
import { Subscription } from '../pages/subscription/Subscription'
import Login from '../pages/Login&Signup/Login'
import Signup from '../pages/Login&Signup/Signup'
import Newcustomer from "../pages/Login&Signup/Newcustomer"
import LoginSeller from '../pages/Login&Signup/LoginSeller'
import SignupSeller from '../pages/Login&Signup/SignupSeller'
import Product from '../pages/NewShop/product/product'
import Order from '../pages/NewShop/Oreders/Order'
import Profile from '../pages/NewShop/Profile/Profile'
import DashBoard from '../pages/NewShop/dashboard/DashBoard'
import Cart from '../pages/customer/Cart/Cart'
import Contact from '../pages/customer/Contact/Contact'
import Products from '../pages/customer/Produscts/Products'
import AboutUs from '../pages/About-us/AboutUs'
import Shopes from '../pages/Shopes/Shopes'

const Routers = () => {
    return (

        <Routes>

            <Route path='/' element={<Navigate to="home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/newcustomer' element={<Newcustomer />} />
            <Route path='/loginSeller' element={<LoginSeller />} />
            <Route path='/signupSeller' element={<SignupSeller />} />
            <Route path='/product' element={<Product />} />
            <Route path='/order' element={<Order />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dashBoard' element={<DashBoard />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/shopes' element={<Shopes />} />

        </Routes>


    )
}

export default Routers