import React, { useState } from "react";



function Demo(){
    
    const users = [
        {
            name: "Kevin",
            age: "20",
            email: "Kevin@gmail.com",
            password: "1234"

        }
        ,
        {
            name: "Conner",
            age: "20",
            email: "Conner@gmail.com",
            password: "4321"

        }
        ,
        {
            name: "Mary",
            age: "20",
            email: "Mary@gmail.com",
            password: "2222"

        }
    ]
    
    

    const [data, setData]=useState(users)

    function userData(){
        var name = document.getElementById("username").value
        var age = document.getElementById("age").value
        var email = document.getElementById("email").value

        var payload = {
            name,
            age,
            email
        }

        setData(data.concat(payload));
    }


    return(
        <div>
            <div className="form-container">
                <h1>Add User Here!</h1>
                <input type="text" name="name" placeholder="NAME:" id="username"/>
                <br/> <br/>
                <input type="text" name="age" placeholder="AGE:" id="age"/>
                <br/> <br/>
                <input type="text" name="email" placeholder="EMAIL:" id="email"/>
                <br/> <br/>
                <button onClick={userData}>Update User</button>
                
            </div>
            <div className="user-container">
            {data.map((items)=>{
                return(
                    <div className="users-info">
                        <h1>Name: {items.name}</h1>
                        <p>Age: {items.age}</p>
                        <p>Email: {items.email}</p>
                    
                    </div>
                )
            })}
            </div>
        </div>
    )
}



export default Demo;

