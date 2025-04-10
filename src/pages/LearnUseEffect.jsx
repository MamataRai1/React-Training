import { useEffect, useState } from "react";

export default function LearnUseEffect() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log("Fetched Data:", data);
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Learn useEffect</h1>
            <div>
                <p>Number of Products: {products?.length}</p>
                <button onClick={getData}>Fetch Data Again</button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
                {products?.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '16px',
                            width: '200px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            textAlign: 'center',
                        }}
                    >
                        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>{product.title}</h2>
                        
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{
                                borderRadius: '8px',
                                objectFit: 'cover',
                                width: '100%',
                                height: '100px'
                            }}
                        />
                        {/* <p style={{ fontSize: '18px', marginBottom: '10px' }}>{product.description}</p> */}
                    </div>
                ))}
            </div>
       </div>
);
}