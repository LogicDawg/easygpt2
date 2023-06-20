import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const NavBar = () => {

    return(
        <ul>
            <li>
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/generatesql">Generate SQL</NavLink>
            </li>
        </ul>
    )
    
}
export default NavBar;