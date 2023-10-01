import "./style.css"
import CartWidget from "./CartWidget";
import { NavLink, Route } from "react-router-dom";
import { ROUTES_NAV } from "../../Routes/Routes";



function Navbar() {
 return (   
<nav className="navbar">
            <div className="btnNav">
                <p className="brand">
                    <NavLink to="/">INCOMODO</NavLink>
                </p>
                <ul>
                    {ROUTES_NAV.map((route) => (
                        <li key={route.path} className="navli">
                            <NavLink to={route.path}>{route.name}</NavLink>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <CartWidget />
        </nav>
    );


        
    
}

export default Navbar; 