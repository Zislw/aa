import React from "react";


export default class Delete extends React.Component<any> {


    refId: React.RefObject<HTMLInputElement> = React.createRef();
    constructor(props: any) {
        super(props)

    }


    render() {
        return (
            <>
                <form>
                    <fieldset >
                        <legend>Delete Product</legend>
                        <div className="col-auto">
                            <label className="form-label">Product Id</label>
                            <input type="text" className="form-control" ref={this.refId} placeholder="product id" />
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={() => this.props.delet(this.refId.current?.value)}>ok</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}