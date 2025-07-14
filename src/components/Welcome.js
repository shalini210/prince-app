import React from 'react'

export default function Welcome(props) {    
    let user = props;    
    let msg ="Sorry "+user.name +" you are not eligbile to vote"
    let cname ="red"
    if(user.age>17)
    {
        msg =" welcome "+ user.name +" you are eligbile to vote"
        cname = "green"
    }
  return (

    <div style={{color:cname,fontSize:"35px"}}>{msg}</div>
  )
}
