import { useRef } from "react"
import { useDispatch } from "react-redux"
import { searchProduct } from "../store/actions/products"

const Search = (props: any) => {
    let dispatch = useDispatch()

    
    //ref
    let myRef = useRef<HTMLInputElement | null>(null)
    return (<>
        <div className="ui icon input">
            <input type="text" onKeyUp={() => dispatch(searchProduct(myRef.current?.value))} ref={myRef} placeholder="Search..." className="prompt" />
            <i aria-hidden="true" className="search icon">
            </i>
        </div>
    </>)
}
export default Search