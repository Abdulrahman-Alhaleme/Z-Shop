import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import Home from '../pages/Home/Home'
import { Subscription } from '../pages/subscription/Subscription'
import Login from '../pages/Login&Signup/Login'
import Signup from '../pages/Login&Signup/Signup'
import NewShop from "../pages/Login&Signup/NewShop"


const Routers = () => {
    return (<Routes>
        <Route path='/' element={<Navigate to="home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/newshop' element={<NewShop />} />

    </Routes>

    )
}

export default Routers