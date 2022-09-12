import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/Details.css'
import { ProductModel } from "../models/Product";

const Details =(props:any)=>{
let location=useLocation()
 let source=null
 console.log((location.state as {more:ProductModel})?.more)
        return (<>
            <div className="details">
                <div className=" ui card">
                    <div className="image">
                        {source?
                        <img src={source}/>:<i aria-hidden="true" className="icon yellow question circle big outline"></i>
                        }
                    </div>
                    <div className="content">
                        <div className="header">{(location.state as {more:ProductModel}).more.name}</div>
                        <div className="description">
                            <div>
                                <span>price:</span>
                                <span>{(location.state as {more:ProductModel}).more.price}</span>
                                <i aria-hidden="true" className="icon dollar sign"></i>
                            </div>
                            <div>amount:  {(location.state as {more:ProductModel}).more.amount}</div>
                            <div>description: {(location.state as {more:ProductModel}).more.description}</div>


                        </div>
                    </div>
                    <div className="extra content">
                        <Link to="../products">back to product list</Link>
                    </div>
                </div>
            </div>
        </>)
    
}

export default Details