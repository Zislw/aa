import { ProductModel } from "../../models/Product";

const initialState: { productList: Array<ProductModel>,searchWord:string } = {
    productList: [],
    searchWord:""
}

export const productListReducer = (state: { productList: Array<ProductModel> ,searchWord:string} = initialState, action: { type: String, payload: any }) => {
    switch (action.type) {
        case "PRODUCT_ADDED":
            return {
                ...state,
                productList: [...state.productList, action.payload]
            }

        case "ALL_PRODUCTS_SAVED":
            return {
                ...state,
                productList: [...action.payload]
            }
        case "PRODUCT_DELETED":
            let arr1 = state.productList.filter(item => item.id != action.payload)
            return {
                ...state,
                productList: [...arr1]
            }

        case "PRODUCT_UPDATED":
            let arr2 = state.productList.filter(item => item.id != action.payload.id)
            arr2.push(action.payload)
            return {
                ...state,
                productList: [...arr2]
            }

            case "SEARCHING":
               return{
                ...state,
                searchWord:action.payload
               }

        default:
            return state


    }
}

