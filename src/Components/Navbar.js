import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="Navbar">
            <Link to={"/"} className="links">Home</Link>
            <Link to={"/about"} className="links">About</Link>
            <Link to={"/contact"} className="links">Contact</Link>
            <Link to={"/quotes"} className="links">Quotes</Link>
            <Link to={"/products"} className="links">Products</Link>
        </div>
    )
}
export default NavBar;