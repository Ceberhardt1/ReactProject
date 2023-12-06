import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="Navbar">
            <Link to={"/"} className="links">Home</Link>
            <Link to={"/about"} className="links">About</Link>
        </div>
    )
}
export default NavBar;