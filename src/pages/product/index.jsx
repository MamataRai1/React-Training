import {  useEffect, useState } from "react";
import{ Link} from "react-router";

export default function ProductPage(addToCart){
    const[products, setProducts]=useState([]);
    const getData = async ()=> {
        const res=await   fetch("https://fakestoreapi.com/products");
        const data=await res.json();
        if(data && data.length){
            setProducts(data);
        }
    };
    useEffect(()=>{
        getData();
    },[]);
    
     

    return(
        <div>
            <h1> Product Pages</h1>
            <div style={{display:"flex", gap: "1rem", flexWrap: "wrap"}}>
                {products?.map((product)=>(
                    <Link to={'/product/${product.id}'} key={product?.id}>
                    <div  style={{
                        border:"1px solid",
                        background:" grey",
                        padding:"1rem"

                    }}
                    >
                        <img src={product?.image} style={{height:"3rem"}}/>
                        <h3>{product?.title}</h3>
                        <h3>{product?.desciption}</h3>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                          
                    </div>
                    </Link>
               ))}
            </div>
        </div>
    );

}