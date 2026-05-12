import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
function addProduct() {
    useEffect(() =>{
        console.log("Mounting");
        return () => {
            console.log("Unmounting");
        }
        
    })
    const [p_id,setPid] = useState(" ");
    const [p_name,setPName] = useState(" ");
    const [p_price,setPPrice] = useState(0);
    const [products,setProducts] = useState(new Map());
    const handleSubmit =() => {
        // Created a local Map (Temp. Map)
        let tempMap = new Map();
        // added my orignal Map onto temp. Map
        tempMap = products;
        // Adding new object into Temp Map
        tempMap.set(p_id,{ProductName:p_name,ProductPrice:p_price});
        // remove old data and added new data on the same object of the orignal map
        setProducts(tempMap);
        // cleaning the form
        setPid(" ");
        setPName(" ");
        setPPrice(0)
    }
  return (
       <div>
            <br></br>
           
             <TextField
              required
              id="outlined-required"
              label="Product ID"
              value={p_id}
              onChange={(e) => setPid(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Product Name"
              value={p_name}
              onChange={(e) => setPName(e.target.value)}
            />     
            <br></br>
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Product Price"
              value={p_price}
              onChange={(e) => setPPrice(e.target.value)}
            />     
            <br></br>
            <br></br>
            
           <Button variant="outlined" onClick = {handleSubmit}>Submit</Button>
            <br/><br/>
            {[...products.entries()].map(([key, value])=>(
                <div>
                    <h1>{key}</h1>
                    <h1>{value.ProductName}</h1>
                    <h1>{value.ProductPrice}</h1>
                </div>
            ))}
           </div>
  )
}

export default addProduct
