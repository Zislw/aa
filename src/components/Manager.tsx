import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import '../css/Manager.css'

export default class Manager extends React.Component<{},{manager:boolean}> {

    refManagerName: React.RefObject<HTMLInputElement> = React.createRef();
    refManagerPassword: React.RefObject<HTMLInputElement> = React.createRef();

    state = {
        manager: false
    }

    iammanager = (refName: string = "", refPassword: string = "") => {
        if (refName.trim() == "naomy" && refPassword.trim() == "8731") {
            let bool = true
            this.setState({ manager: bool })
        }

    }


    render() {
        return (
            <div>
                {!this.state.manager && <form>
                    <fieldset >
                        <legend>Manager Details:</legend>
                        <div className="col-auto">
                            <label className="form-label">Manager Name</label>
                            <input type="text" className="form-control m-name" ref={this.refManagerName} placeholder="manager name" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Manager Password</label>
                            <input type="password" className="form-control m-password" ref={this.refManagerPassword} placeholder="manager password" />
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={() => this.iammanager(this.refManagerName.current?.value, this.refManagerPassword.current?.value)}>ok</button>
                        </div>
                    </fieldset>
                </form>}
                {this.state.manager === true &&
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
}