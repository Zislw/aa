import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import {Login} from './components/Login';
import Manager from './components/Manager';
import Add from './components/manager-components/Add';
import Edit from './components/manager-components/Edit';
import Delete from './components/manager-components/Delete';
import { ProductModel } from './models/Product';
import Details from './components/Details';
import { resolveTypeReferenceDirective } from 'typescript';
import { Register } from './components/Register';
import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  
  let [prodArr, setProdArr] = useState(null)
  let [prodMoreDetails,setProdMoreDetails]=useState(null)

  let navigate = useNavigate()
  useEffect(()=>{
    fetch('http://localhost:8000/api/products', {
    }).then(res => res.json())
      .then(data => setProdArr(data))  
  },[])
  
  
  
  const add = (p: any) => {  
    console.log(p);
    
    fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p)
    }).then(res => res.json())
      .then(data => setProdArr(data))
    navigate('/products')
  }

  const delet = (id: number) => {
    fetch(`http://localhost:8000/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => setProdArr(data))

  }
  const more=(prod:any)=>{
    console.log('a'+prod);
    
    setProdMoreDetails(prod)
    navigate('/moreDetails')
  }
  const nav=(where:string)=>{
    navigate(`/${where}`)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products"  element={<ProductList mored={more} navig={nav} />}/>
          <Route path="moreDetails" element={<Details det={prodMoreDetails}/>}/>
          <Route path="about" element={<About />} />
          <Route path="manager" element={<Manager />}>
            <Route path="addProduct" element={<Add add={add} />} />
            <Route path="editProduct" element={<Edit list={prodArr} add={add} delet={delet} />} />
            <Route path="deleteProduct" element={<Delete delet={delet} />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
