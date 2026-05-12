import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function AddProduct() {
    const [p_id, setPid] = useState("");
    const [p_name, setPName] = useState("");
    const [p_price, setPPrice] = useState(0);
    const [products, setProducts] = useState(new Map());

    useEffect(() => {
        console.log("Mounting");
        return () => {
            console.log("Unmounting");
        }
    }, [])

    const handleSubmit = () => {
        let tempMap = new Map(products);
        tempMap.set(p_id, { ProductName: p_name, ProductPrice: p_price });
        setProducts(tempMap);
        setPid("");
        setPName("");
        setPPrice(0)
    }

    return (
        <div>
            <br/>
            <TextField required label="Product ID" value={p_id}
                onChange={(e) => setPid(e.target.value)} />
            <br/><br/>
            <TextField required label="Product Name" value={p_name}
                onChange={(e) => setPName(e.target.value)} />
            <br/><br/>
            <TextField required label="Product Price" value={p_price}
                onChange={(e) => setPPrice(e.target.value)} />
            <br/><br/>
            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
            <br/><br/>
            <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
            {[...products.entries()].map(([key, value]) => (
                <Card key={key} sx={{minWidth:200}}>
                    <CardContent>
                        <Typography variant="h6">ID: {key}</Typography>
                        <Typography>Name: {value.ProductName}</Typography>
                        <Typography>Price: {value.ProductPrice}</Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>
    )
}

export default AddProduct