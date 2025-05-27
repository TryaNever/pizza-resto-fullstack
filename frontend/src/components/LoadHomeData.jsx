import {useEffect, useState} from "react";
import StarsRating from "./StarsRating.jsx";
import CardProduct from "./CardProduct.jsx";

export default function LoadHomeData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/categories');
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setData(data.categories);
            } catch (error) {
                setError(error.constructor || "Error");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const allProduct = data.flatMap((category) => category.produits || [])
    return (
        <div>
            <div>
                {data.map((item, index) => (
                    <div data-id={index} key={index}>{item.name}</div>
                ))}
            </div>
            <div>
                {allProduct.slice(0, 3).map((item, index) => (
                    <CardProduct key={index} item={item} />
                ))}
            </div>
        </div>

    )
}