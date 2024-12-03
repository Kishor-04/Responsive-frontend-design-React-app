import { SearchBar } from "./Navbar"
import { UnusedButtons } from "./Navbar"

export const Dropdown = ()=>{
    return(
        <div className= "rounded-md bg-gray-100">
            <div className=""><SearchBar></SearchBar></div>
            <div className=""><UnusedButtons></UnusedButtons></div>            
        </div>
    )
}