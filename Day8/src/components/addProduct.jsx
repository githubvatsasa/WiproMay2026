import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Card,CardContent, Typography } from '@mui/material';
function addProduct() {
    useEffect(() =>{
        fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => setProdArray(data))
        },[])
    const [p_id,setPid] = useState(" ");
    const [p_name,setPName] = useState(" ");
    const [p_price,setPPrice] = useState(0);
    const [products,setProducts] = useState(new Map());
    const [prodArray,setProdArray] = useState([]);
    const handleSubmit =() => {
        // Created a local Map (Temp. Map)
        let tempMap = new Map();
        // added my orignal Map onto temp. Map
        tempMap = products;
        // Adding new object into Temp Map
        tempMap.set(p_id,{ProductName:p_name,ProductPrice:p_price});
        // remove old data and added new data on the same object of the orignal map
        setProducts(tempMap);
        fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:p_id,
                pName:p_name,
                pPrice:p_price
            })
        })
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
            {/* {[...prod.entries()].map(([key, value])=>(
                <div>
                    <h1>{key}</h1>
                    <h1>{value.ProductName}</h1>
                    <h1>{value.ProductPrice}</h1>
                </div>
            ))} */}
            <Box sx={{ display: 'flex',gap:2, flexWrap: 'wrap', justifyContent: 'center' ,padding:3}}>
            
            {
                prodArray.map((ele) =>(
                    <Card key = {ele.id} sx={{ width: 250,boxShadow:3 }}>
                        <CardContent>
                              <Typography variant = 'h5'>Product Name :{ele.pName}</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant = 'body'>ID:{ele.id}</Typography>
                        </CardContent>
                        
                        <CardContent>  
                            <Typography variant = 'body'> Price :{ele.pPrice}</Typography></CardContent>
                    </Card>
                ))
            
            }
            </Box>
           </div>
  )
}

export default addProduct
