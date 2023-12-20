import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Demo3(){

    const [data, setData] = useState("")

    function handleClick(val){
        setData(val)
    }

    useEffect(()=>{
        console.log("It has changed")
    })

  return (
    <div>
        <center>
            <button onClick={()=> handleClick("users")}>Users</button>
            <button onClick={()=> handleClick("products")}>Products</button>
        </center>

        <h1>{data}</h1>
    </div>
  )
}
