export default function First()
{
    let fcolor ="blue"
    let bgcolor = "skyblue"
    let s = {fontSize:"30px",textAlign:"center",color:"Orange"}
    return(
        <>  
        <h1 style={s}>WElcome to REact</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazvE-ZeEms56wLVy_VhqqyhDQsC0mXuwOOhOJOk54ORhX2s8B"></img>
        <h1 style={{backgroundColor:"red",fontSize:"25px"}}>This is first Component</h1>
        <p style={{height:"200px",width:"200px",backgroundColor:bgcolor,
            color:fcolor
        }}>This is description of first component </p>
        </>
    )
}

// export default First