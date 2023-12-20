import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Products() {
    const [products, setProducts]= useState([])

    useEffect(()=>{
        async function getData(){
            var response = await fetch("https://dummyjson.com/products")
            var data = await response.json()
            console.log(data)
            setProducts(data.products);

        }
        getData();
    }, [])

  return (
    <div>

    </div>
  )
}
