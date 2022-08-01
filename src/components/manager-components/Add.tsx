import React from "react";


export default class Add extends React.Component<any> {
     


    refId: React.RefObject<HTMLInputElement> = React.createRef();
    refName: React.RefObject<HTMLInputElement> = React.createRef();
    refPrice: React.RefObject<HTMLInputElement> = React.createRef();
    refAmount: React.RefObject<HTMLInputElement> = React.createRef();
    refDescription: React.RefObject<HTMLInputElement> = React.createRef();
    refImageDescription:React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: any) {
        super(props)
    
    }

    render() {
        return (
            <>
                <form>
                    <fieldset >
                        <legend>Add Product</legend>
                        <div className="col-auto">
                            <label className="form-label">Id</label>
                            <input type="text" className="form-control" ref={this.refId} placeholder="product id" />
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
                            <label className="form-label">Image-Description</label>
                            <input type="text" className="form-control" ref={this.refImageDescription} placeholder="image description" />
                        </div>
                        <div className="col-auto">
                            
                            <button type="button" className="btn btn-primary" onClick={() => this.props.add({"id":Number(this.refId.current?.value), "name":this.refName.current?.value,"price":Number(this.refPrice.current?.value),"amount": Number(this.refAmount.current?.value),"description":this.refDescription.current?.value,"image":this.refImageDescription.current?.value})}>ok</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}