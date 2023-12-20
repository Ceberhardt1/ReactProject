import React from "react";

function Contact(){
    return(
        <div className="contactContainer">
            <h1>Contact Info:</h1>
            <input type="text" placeholder="USER NAME:"/>
            <br/><br/>
            <input type="text" placeholder="EMAIL:"/>
            <br/><br/>
            <input type="text" placeholder="PHONE NUMBER:"/>
            <br/><br/>
            <input type="text" placeholder="MESSAGE:"/>
        </div>
    )

}
export default Contact;