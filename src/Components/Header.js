import React from "react";

function Header(props){
    return(
        <div className="header">
            <h1>{props.headingnames}</h1>
            <p>I made a change</p>
        </div>
    );
}
export default Header;