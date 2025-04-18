import { useEffect, useState } from "react";

export default function Cart({cart}) {
    const [apiCart, setApiCart] = useState([]);
    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/carts");
        const data = await res.json();
        if (data && data.length) {
            setApiCart(data);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    console.log("cart", cart);
    console.log("apiCart", apiCart);
     
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="flex flex-col gap-5">
                {cart?.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between w-[30%] border p-4 rounded-md"
                    >
                        <img src={item.image} alt={item.title} className="w-16 h-16" />
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}