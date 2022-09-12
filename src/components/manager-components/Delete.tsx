import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/products";


const Delete=(props:any)=> {

let refId=useRef<HTMLInputElement|null>(null)
let dispatch=useDispatch()

   
        return (
            <>
                <form>
                    <fieldset >
                        <legend>Delete Product</legend>
                        <div className="col-auto">
                            <label className="form-label">Product Id</label>
                            <input type="text" className="form-control" ref={refId} placeholder="product id" />
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={() => dispatch(deleteProduct(refId.current?.value))}>ok</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }


export default Delete