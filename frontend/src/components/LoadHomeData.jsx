import {useEffect, useState} from "react";
import CardProduct from "./CardProduct.jsx";

export default function LoadHomeData() {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
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
                setProducts(data.categories.flatMap((category) => category.produits || []))
                setCategory(data.categories)
            } catch (error) {
                setError(error.constructor || "Error");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    function setProduct(products) {
        const sortCategorie = data.find((item) => item.id === products)
        setProducts(sortCategorie.produits)
    }

    return (
        <div>
            <div>
                {category.map((item, index) => (
                    <div data-id={index} key={index} onClick={() => setProduct(item.id)}>{item.name}</div>
                ))}
            </div>
            <div className="contain-product">
                {products.map((item, index) => (
                    <CardProduct key={index} item={item} />
                ))}
            </div>
        </div>

    )
}