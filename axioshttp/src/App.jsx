import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  let [state,setState]=useState([])
  useEffect(()=>{
      axios.get("https://dummyjson.com/products").then((data)=>{
        setState(data.data.products)
      })
  },[])


  return (
  
    <div>
      {state.map((element,key)=>{
        return <h1 key={key}>{element.id}</h1>
      })}
       
    </div>
  )
}

export default App