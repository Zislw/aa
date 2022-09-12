import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Login } from './components/Login';
import Manager from './components/Manager';
import Add from './components/manager-components/Add';
import Edit from './components/manager-components/Edit';
import Delete from './components/manager-components/Delete';
import { ProductModel } from './models/Product';
import Details from './components/Details';
import { Register } from './components/Register';
import { GoogleLogin } from 'react-google-login';
import Profile from './components/Profile';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './store/actions/products';

function App() {
  let dispatch = useDispatch()
  
  useEffect(()=>{
     dispatch(getAllProducts())
  },[])
 

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<ProductList />} />
          <Route path="moreDetails" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="pro" element={<Profile />} />
          <Route path="manager" element={<Manager />}>
            <Route path="addProduct" element={<Add />} />
            <Route path="editProduct" element={<Edit />} />
            <Route path="deleteProduct" element={<Delete />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
