import React, { useState } from 'react'

export default function TakevalueusingState() {
    const [a,seta]=useState(0)
    const [b,setb]=useState(0)
    const [msg,setmsg]=useState("")
    const calculate=(op)=>
    {
        let x = parseInt(a)
        let y = parseInt(b)
        switch (op) {
            case '+':
                let c = x+y;
                setmsg(`sum of ${x} and ${y} is ${c}`)
                break;
        
            default:
                break;
        }
    }
  return (
    <div>
        <p>Enter a : <input onBlur={(e)=>seta(e.target.value)}/></p>
        <p>Enter b : <input onBlur={(e)=>setb(e.target.value)}/></p>
        <input type='button' value="+" onClick={()=>calculate('+')}/>
        <h1>{msg}</h1>

    </div>

  )
}
