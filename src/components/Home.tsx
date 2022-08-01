import e from "express";
import React from "react";
import { Outlet } from "react-router"
import { Link, NavLink } from "react-router-dom";
import "../css/Home.css"

export default class Home extends React.Component {
   render() {


      return (<>
         <h1>Welcome to My Site</h1>
         <div className="ui inverted menu">
            <NavLink className={({ isActive }) => isActive ? 'active yellow item' : 'item'} to={""} >home-page</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active yellow item' : 'item'} to={"/login"}>login</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active yellow item' : 'item'} to={"/register"}>register</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active yellow item' : 'item'} to={"/products"}>products list</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active yellow item' : 'item'} to={"/about"}>about site</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active yellow item' : 'item'} to={"/manager"}>mamanger</NavLink>
         </div>
       
         <Outlet />
      </>
      )
   }
}