import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/products";


const Add=(props:any)=> {
     
   let dispatch=useDispatch()

   let refId= useRef<HTMLInputElement|null>(null)
   let refName= useRef<HTMLInputElement|null>(null)
   let refPrice=useRef<HTMLInputElement|null>(null)
   let refAmount=useRef<HTMLInputElement|null>(null)
   let refDescription=useRef<HTMLInputElement|null>(null)
   let refImageDescription= useRef<HTMLInputElement|null>(null)

    
   
        return (
            <>
                <form>
                    <fieldset >
                        <legend>Add Product</legend>
                        <div className="col-auto">
                            <label className="form-label">Id</label>
                            <input type="text" className="form-control" ref={refId} placeholder="product id" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" ref={refName} placeholder="product name" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Price</label>
                            <input type="text" className="form-control" ref={refPrice} placeholder="price" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Amount</label>
                            <input type="text" className="form-control" ref={refAmount} placeholder="amount" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" ref={refDescription} placeholder="description" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Image-Description</label>
                            <input type="text" className="form-control" ref={refImageDescription} placeholder="image description" />
                        </div>
                        <div className="col-auto">
                            
                            <button type="button" className="btn btn-primary" onClick={() =>dispatch(addProduct({"id":Number(refId.current?.value), "name":refName.current?.value,"price":Number(refPrice.current?.value),"amount": Number(refAmount.current?.value),"description":refDescription.current?.value,"image":refImageDescription.current?.value}))}>ok</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    
}

export default Add