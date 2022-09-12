

import { NavLink } from "react-router-dom";
import '../css/Product.css';

const Product = (props: any) => {

    return (

        <div className="ui yellow fluid card">
            <div className="content">
                <label># {props.details.id}</label>
                <h2 className="header">{props.details.name}</h2>
                <div className="description">
                    <div>amount:{props.details.amount}</div>
                    <div> <label>price:{props.details.price}</label></div>
                </div>
                <div><i aria-hidden="true" className=" icon hand point right outline yellow"></i><NavLink to='/moreDetails' state={{more:props.details}}>more details</NavLink> </div>
                <div className="extra">
                    <button className="ui primary right floated button">Buy<i aria-hidden="true" className="right chevron icon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default Product
