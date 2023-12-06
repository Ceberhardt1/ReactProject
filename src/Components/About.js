import React from "react";

function About(){

    function changeColor(){
        var heading = document.getElementById("heading")
        heading.style.color = "red"
    }

    return(
        <div>
            <center>
                <h1 id="heading">This is the about section!</h1>
                <button onClick={changeColor}>Click here to change color!</button>
            </center>
        </div>
    )
}
export default About;