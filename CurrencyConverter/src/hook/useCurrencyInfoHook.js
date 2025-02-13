import React, { useEffect, useState } from 'react'

function useCurrencyInfoHook(curr) {
  const [data,setData] = useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[curr]))
    console.log(data)
  },[curr])
  
  console.log(data)
    return data
}

export default useCurrencyInfoHook



    
 