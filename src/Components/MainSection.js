import React from "react";

import cover from "../Images/2022-03-21.png"

function MainSection(){
    return(
        <div className="mainSection">
            <p>This is my website</p>

            <img src={cover} alt="cover" width="500px"/> 
        </div>
    )
}
export default MainSection;