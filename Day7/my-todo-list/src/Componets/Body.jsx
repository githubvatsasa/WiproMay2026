import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

function Body(){
    // SetState Hook
    // First attribute is a variable
    // Second is a Set function
    // const [title,setTitle] = useState(" ")
    const[temptitle,setTempTitle] = useState(" ")
    // const [task,setTask] = useState(" ")
    const [tempTask,setTempTask] = useState(" ")
    const[todoMap,setTodoMap] = useState(new Map())
    const[todo,setTodo]=useState({
        title:"",
        task:""
    })
    
    const handleClick=(event)=>{
        const myMap =  new Map()
        setTodo({
            title:temptitle,
            task:tempTask
        })
        setTodoMap(todoMap.size+1,todo)
        
        console.log(todoMap);
        
        // console.log(myMap);
        // const todo = new Map({tempTask,temptitle})
        // setTodoMap(todo)
        // setTempTask("")
        // setTempTitle("")
        
    }
    // const handleChangeTitle=(event)=>{
    //     console.log(event.target.value);
    //     setTempTitle(event.target.value)
    // }
    // const handleChangeTask=(event)=>{
    //     setTempTask(event.target.value)
    //     console.log(event.target.value);
    // }
    const handleChange=(event)=>{
        if(event.target.id === "title"){
            setTempTitle(event.target.value)
        }
        else{
            setTempTask(event.target.value)
        }      
    }
    const name = "Todo List"
    return(
        <div>
            <h1>Welcome {name}</h1>
              
            <TextField id="title" label="Title" variant="standard" onChange={handleChange}  />
            <TextField fullWidth id="task" label="Task" variant="standard" onChange={handleChange} />
            <Button variant="outlined" onClick = {handleClick}>Submit</Button>
            {todoMap.forEach(ele =>{
                console.log(ele);
                
            })}
                      
        </div>
    )
}
export default Body;