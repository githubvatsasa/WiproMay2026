import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Login() {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [result,setResult] = useState("");
    
  const handleSubmit = () => {
    console.log(username,password);
    if(username === "admin" && password === "admin")
        setResult("Success")
        
    setPassword("");
    setUserName("");
  }
  return (
    <div>
        <br></br>
       
         <TextField
          required
          id="outlined-required"
          label="User Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />     
        <br></br>
        <br></br>
        
       <Button variant="outlined" onClick = {handleSubmit}>Submit</Button>
       <h1>{result}</h1>
    </div>
  )
}

export default Login