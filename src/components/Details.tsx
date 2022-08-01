import React from "react";
import { Link } from "react-router-dom";
import '../css/Details.css'
import img1 from '../pictures/0011.jpg' 
import img2 from '../pictures/0012.jpg' 
import img3 from '../pictures/0013.jpg' 
import img4 from '../pictures/0014.jpg' 
import img5 from '../pictures/0015.jpg' 
export default class Details extends React.Component<any>{
    
//source=this.props.det.image
source=null


    render() {
        return (<>
        {console.log(this.props.det)
        }
            <div className="details">
                <div className=" ui card">
                    <div className="image">
                        {this.source?
                        <img src={this.source}/>:<i aria-hidden="true" className="icon yellow question circle big outline"></i>
                        }
                    </div>
                    <div className="content">
                        <div className="header">{this.props.det.name}</div>
                        <div className="description">
                            <div>
                                <span>price:</span>
                                <span>{this.props.det.price}</span>
                                <i aria-hidden="true" className="icon dollar sign"></i>
                            </div>
                            <div>amount:  {this.props.det.amount}</div>
                            <div>description: {this.props.det.description}</div>


                        </div>
                    </div>
                    <div className="extra content">
                        <Link to="../products">back to product list</Link>
                    </div>
                </div>
            </div>
        </>)
    }
}