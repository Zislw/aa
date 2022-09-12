import React, { RefObject, useEffect, useRef, useState } from "react";
import { ProductModel } from '../models/Product'
import Product from './Product'
import "../css/ProductList.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, searchProduct } from "../store/actions/products";
import { useNavigate } from "react-router";
import Search from "./Search";


const ProductList = (props: any) => {

    //general state
    let prodArr: Array<ProductModel> = useSelector(state => (state as { productList: Array<ProductModel>, searchWord: string }).productList)
    let searchWord: string = useSelector(state => (state as { productList: Array<ProductModel>, searchWord: string }).searchWord)


    //local state
    let [message, setMassage] = useState<string>("")

    //local variable
    let filterArr: Array<ProductModel> = prodArr
    useEffect(() => {        
        if (searchWord != "") {
            filterArr = prodArr.filter(item => item.name.includes(searchWord))
            if (filterArr.length !== 0) {
                let emptyMessage: string = ""
                setMassage(emptyMessage)
            }
            else {
                let message = "there are not details"
                setMassage(message)
                let emptyArr: Array<ProductModel> = []
                filterArr = emptyArr
            }
        }
    }, [searchWord])

    return (
        <>
            <div className="six wide column ">
                <div className="ui search">
                    <Search />
                </div>
            </div>
            <div>
                {
                    message !== "" &&
                    <div >
                        <h2 className="ui icon center header">
                            <i aria-hidden="true" className="ban yellow  icon"></i>
                            <div className="content">{message}</div>
                        </h2>
                    </div>
                }
                <div className="content ui cards">
                    {filterArr.filter(item=>item.name.includes(searchWord)).map(p => { return (<Product key={p.id} details={p}></Product>) })}
                </div>
            </div>
        </>
    )
}


export default ProductList