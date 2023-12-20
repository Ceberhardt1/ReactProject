import React, { useEffect, useState } from 'react'

export default function Quotes() {

    const [quotes, setQuotes]= useState([])

    useEffect(()=>{
        async function getData(){
            var response = await fetch("https://dummyjson.com/quotes")
            console.log(response);
            var data = await response.json()
            console.log(data.quotes);
            setQuotes(data.quotes)
    
            
        }
    
        getData();
    }, [])
    
  return (
    <div>
        {quotes.map((items)=>{
            return(
                <div>
                    <h1>{items.quote}</h1>
                    <p>{items.author}</p>
                </div>
            )
        })}
    </div>
  )
}
