import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../css/Product.css';

export default class Product extends React.Component<any>{

    render() {
        return (
            
            <div className="ui yellow fluid card">
                {/* <div className="content">
    
        <label>{this.props.details.id}</label>
        <h2 className="header">{this.props.details.name}</h2>
        <label>amount:{this.props.details.amount}</label>
        <label>price:{this.props.details.price}</label>
        <div>
            description:{this.props.details.description}
        </div>
        <div>
            <a href="#" onClick={() => this.props.mored(this.props.details)} >more details</a>
        </div>
    </div> */}
                <div className="content">
                    <label># {this.props.details.id}</label>
                    <h2 className="header">{this.props.details.name}</h2>
                    <div className="description">
                        <div>amount:{this.props.details.amount}</div>
                        <div> <label>price:{this.props.details.price}</label></div>
                    </div>
                    <div><i aria-hidden="true" className=" icon hand point right outline yellow"></i>  <a href="#" onClick={() => this.props.mored(this.props.details)} >more details</a></div>
                    <div className="extra">
                        <button className="ui primary right floated button">Buy<i aria-hidden="true" className="right chevron icon"></i>
                        </button>
                      </div>
                </div>
            </div>
        )
    }

}
