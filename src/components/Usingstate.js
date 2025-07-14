import React from 'react'
import { useState } from 'react';
export default function Usingstate() {
    // let i =0;
    const [i,seti]=useState(0)
const increment =()=>
{
    let t = i ;
    t++
   seti(t) 
}
const decrement =()=>
{
    let t = i ;
    t--
   seti(t) 
}
  return (
    <>
    <div> 
        <a href='https://react-vite-revise-app.vercel.app/products/Air%20Conditioner'>Task link</a>
   {(i>0)? <input type='button' value="-" onClick={()=>decrement()}/>:""}
    i is  : {i} 
    {(i<=5)?<input type='button' value="+" onClick={()=>increment()}/>:" "}
     </div>
     </>
  )
}
