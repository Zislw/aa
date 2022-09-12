import axios from "axios"
import { ProductModel } from "../../models/Product"

export const addProduct :Function= (product: ProductModel) => {
    return (dispatch: Function) => {
        axios.post('http://localhost:8000/api/products', product)
            .then(response => {
                dispatch(saveProduct(product))
            }, err => {
                console.log("error");
            })
    }
}

export const saveProduct = (product: ProductModel) => {
    return {
        type: "PRODUCT_ADDED",
        payload: product
    }
}

export const getAllProducts:Function = () => {
    return (dispatch: Function) => {
        axios.get('http://localhost:8000/api/products',{headers: {'Authorization': sessionStorage.getItem("token") as any}})
            .then(response => {
                dispatch(saveAllProducts(response.data))
            }, err => {
                console.log('error');
            })
    }
}

export const saveAllProducts = (productsArr: Array<ProductModel>) => {
    return {
        type: "ALL_PRODUCTS_SAVED",
        payload: productsArr
    }
}

export const deleteProduct:Function = (prodId: Number) => {
    return (dispatch: Function) => {
        axios.delete(`http://localhost:8000/api/products/${prodId}`)
            .then(response => {
                console.log(response);
                dispatch(saveProductDelete(prodId))
            }, err => {
                console.log("error");

            })
    }
}

export const saveProductDelete = (prodId: Number) => {
    return {
        type: "PRODUCT_DELETED",
        payload: prodId
    }
}

export const updateProduct :Function= (product: ProductModel) => {
    return (dispatch: Function) => {
        axios.put(`http://localhost:8000/api/products/${product.id}`)
            .then(response => {
                dispatch(saveUpdatePorduct(response.data))
            }, err => {
                console.log("error");
            })
    }
}

export const saveUpdatePorduct = (product: ProductModel) => {
    return {
        type: "PRODUCT_UPDATED",
        payload: product
    }
}


export const searchProduct=(word:string|undefined)=>{
   return{
    type:"SEARCHING",
    payload:word
   }
}