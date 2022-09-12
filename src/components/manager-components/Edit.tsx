import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../../models/Product";
import { updateProduct } from "../../store/actions/products";


const Edit =(props:any)=> {

 let prodArr=useSelector(state=>(state as { productList: Array<ProductModel>, searchWord: string }).productList) 
 let refId=useRef<HTMLInputElement|null>(null)
 let refName=useRef<HTMLInputElement|null>(null)
 let refPrice=useRef<HTMLInputElement|null>(null)
 let refAmount=useRef<HTMLInputElement|null>(null)
 let refDescription=useRef<HTMLInputElement|null>(null)

let dispatch=useDispatch()
 

const  edit = (id: string="") => {    
   let prod=prodArr.filter((item: { id: number; })=>item.id===Number(id))
   let n=refName.current
   if(n) n.value=prod[0].name
   let p=refPrice.current
   if(p) p.value=prod[0].price.toString()
   let a=refAmount.current
   if(a) a.value=prod[0].amount.toString()
   let d=refDescription.current
   if(d) d.value=prod[0].description
  }

 
    return (
      <>
        <form>
          <fieldset >
            <legend>Edit Product</legend>
            <div className="col-auto">
              <label className="form-label">Which product do You Want to Edit?</label>
              <input type="text" className="form-control" ref={refId} placeholder="product id" />
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary" onClick={() => edit(refId.current?.value)}>ok</button>
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
              <button type="button" className="btn btn-primary" onClick={() => dispatch(updateProduct({ "id":Number(refId.current?.value), "name": refName.current?.value, "price":Number( refPrice.current?.value), "amount": Number(refAmount.current?.value), "description": refDescription.current?.value }))}>Save Changes</button>
            </div>
          </fieldset>
        </form></>
    )
  }
export default Edit