import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import '../css/Manager.css'

const Manager =(props:any)=> {

   let refManagerName: React.RefObject<HTMLInputElement> = React.createRef();
   let refManagerPassword: React.RefObject<HTMLInputElement> = React.createRef();
   let [manager,setManager]=useState(false)
   

   let iammanager = (refName: string = "", refPassword: string = "") => {
        if (refName.trim() == "naomy"&& refPassword.trim() == "8731") {
            let bool = true
           setManager(bool)
        }

    }


    
        return (
            <div>
                {!manager && <form>
                    <fieldset >
                        <legend>Manager Details:</legend>
                        <div className="col-auto">
                            <label className="form-label">Manager Name</label>
                            <input type="text" className="form-control m-name" ref={refManagerName} placeholder="manager name" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Manager Password</label>
                            <input type="password" className="form-control m-password" ref={refManagerPassword} placeholder="manager password" />
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={() => iammanager(refManagerName.current?.value, refManagerPassword.current?.value)}>ok</button>
                        </div>
                    </fieldset>
                </form>}
                {manager === true &&
                    <div className="flex-manager">
                        <div className="ui inverted pointing vertical menu">
                            <NavLink className={({ isActive }) => isActive ? 'item yellow active' : 'item'} to="addProduct">add product</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'item yellow active' : 'item'} to="editProduct">edit product</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'item yellow active' : 'item'} to="deleteProduct">delete product</NavLink>
                        </div>
                        <div className="out">
                        <Outlet />
                        </div>
                    </div>}
            </div>
        )
    }


export default Manager