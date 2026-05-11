import Button from '@mui/material/Button';
import { useState } from 'react'
function Body({title,task}){
    // SetState Hook
    // First attribute is a variable
    // Second is a Set function
    const [count,setCount] = useState(0)
    const handleClick=(name)=>{
        setCount(count+1)
        alert(name +" " + count)
        console.log(name,"-- ", count)
    }
    const name = "Todo List"
    return(
        <div>
            <h1>Welcome {name}</h1>
            <h4>Todays Task: {title} , {task}</h4>
            <Button variant="outlined" onClick = {()=>handleClick("Check the Code")}>Start the Counter</Button>
        </div>
    )
}
export default Body;