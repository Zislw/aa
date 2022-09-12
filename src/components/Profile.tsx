import axios from "axios"
import { useEffect } from "react"

const Profile = () => {
 
useEffect(()=>{
    axios.get('http://localhost:8000/profile')
})

    return (<><label>profile</label>
    </>)
}
export default Profile