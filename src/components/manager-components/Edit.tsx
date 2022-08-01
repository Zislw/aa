import React from "react";


export default class Edit extends React.Component<any> {

  refId: React.RefObject<HTMLInputElement> = React.createRef();
  refName: React.RefObject<HTMLInputElement> = React.createRef();
  refPrice: React.RefObject<HTMLInputElement> = React.createRef();
  refAmount: React.RefObject<HTMLInputElement> = React.createRef();
  refDescription: React.RefObject<HTMLInputElement> = React.createRef();


  constructor(props:any){
    super(props)
  }

  edit = (id: string="") => {    
   let prod=this.props.list.filter((item: { id: number; })=>item.id===Number(id))
   this.props.delet(Number(id))
   let n=this.refName.current
   if(n) n.value=prod[0].name
   let p=this.refPrice.current
   if(p) p.value=prod[0].price
   let a=this.refAmount.current
   if(a) a.value=prod[0].amount
   let d=this.refDescription.current
   if(d) d.value=prod[0].description
  }

  render() {
    return (
      <>
        <form>
          <fieldset >
            <legend>Edit Product</legend>
            <div className="col-auto">
              <label className="form-label">Which product do You Want to Edit?</label>
              <input type="text" className="form-control" ref={this.refId} placeholder="product id" />
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary" onClick={() => this.edit(this.refId.current?.value)}>ok</button>
            </div>
            <div className="col-auto">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" ref={this.refName} placeholder="product name" />
            </div>
            <div className="col-auto">
              <label className="form-label">Price</label>
              <input type="text" className="form-control" ref={this.refPrice} placeholder="price" />
            </div>
            <div className="col-auto">
              <label className="form-label">Amount</label>
              <input type="text" className="form-control" ref={this.refAmount} placeholder="amount" />
            </div>
            <div className="col-auto">
              <label className="form-label">Description</label>
              <input type="text" className="form-control" ref={this.refDescription} placeholder="description" />
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary" onClick={() => this.props.add({ "id":Number(this.refId.current?.value), "name": this.refName.current?.value, "price":Number( this.refPrice.current?.value), "amount": Number(this.refAmount.current?.value), "description": this.refDescription.current?.value })}>Save Changes</button>
            </div>
          </fieldset>
        </form></>
    )
  }
}