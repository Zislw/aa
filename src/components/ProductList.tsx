import React, { useState } from "react";
import { ProductModel } from '../models/Product'
import Product from './Product'
import "../css/ProductList.css"


export default class ProductList extends React.Component<{ mored: Function,navig:Function }, { filterArr: Array<ProductModel>, message: string }> {
    prodArr: Array<ProductModel> = [];
    myRef: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            filterArr: [],
            message: ""
        }
    }
    componentDidMount() {

        fetch('http://localhost:8000/api/products',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") as any
                }
            })
            .then(res => res.json())
            .then(data => {                
                if (data.err != null)
                   this.props.navig('login')
                else {
                this.prodArr = data
                this.setState({ filterArr: data })
                }
            })

    }

    search = (ref: string = "") => {
        let arr = this.prodArr.filter(item => item.name.includes(ref.trim()))
        if (arr.length !== 0) {
            this.setState({ filterArr: arr })
            let emptyMessage: string = ""
            this.setState({ message: emptyMessage })
        }
        else {
            let message = "there are not details"
            this.setState({ message })
            let emptyArr: Array<ProductModel> = []
            this.setState({ filterArr: emptyArr })
        }
    }
    // search=(ref:string="")=>{
    //     let id:number=Number(ref)
    //     fetch(`http://localhost:8000/api/products/${id}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //        if(data){
    //         console.log(data);

    //         this.setState({ filterArr: [data] })
    //         let emptyMessage: string = ""
    //         this.setState({ message: emptyMessage })
    //        }
    //     })
    // }

    render() {
        return (
            <>
                <div className="six wide column ">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input type="text" onKeyUp={() => this.search(this.myRef.current?.value)} ref={this.myRef} placeholder="Search..." className="prompt" />
                            <i aria-hidden="true" className="search icon">
                            </i>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.message !== "" &&
                        <div >
                            <h2 className="ui icon center header">
                                <i aria-hidden="true" className="ban yellow  icon"></i>
                                <div className="content">{this.state.message}</div>
                            </h2>
                        </div>
                    }
                    <div className="content ui cards">

                        {this.state.filterArr.map(p => { return (<Product key={p.id} mored={this.props.mored} details={p}></Product>) })}
                    </div>
                </div>
            </>
        )
    }
}