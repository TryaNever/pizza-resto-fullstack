import {useEffect, useState} from "react";
import CardProduct from "./CardProduct.jsx";

export default function LoadHomeData() {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectCategory, setSelectCategorie] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/categories');
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                console.log(data)
                setData(data.categories);
                setProducts(data.categories.flatMap((category) => category.produits || []))
                setCategory(data.categories)
            }  finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    function setProduct(products) {
        console.log(data)
        const sortCategorie = data.find((item) => item.id === products)
        setProducts(sortCategorie.produits)
        setSelectCategorie(products)
    }

    return (
        <>
            {error}
            <div className="w-full flex flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-24">
                {category.map((item, index) => {
                    const isSelected = selectCategory === item.id;
                    return (
                        <div key={index} onClick={() => setProduct(item.id)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer transition-colors duration-200 shrink-0 ${isSelected ? 'bg-[#F54748] text-white' : 'bg-white'}`} style={{ boxShadow: '2px 2px 4px 0px #00000040' }}>
                            <img className="h-8 sm:h-10 lg:h-12 rounded-full" src={`http://127.0.0.1:8000/storage/category/${item.img[0].image_url}`} alt={item.description}/>
                            <p className="text-sm sm:text-base font-medium">{item.name}</p>
                        </div>

                    );
                })}
            </div>

            <div className="w-full flex flex-wrap items-center justify-center max-lg:flex-col lg:flex-row gap-8 px-20 md:px-40  lg:px-0 mt-10">
                {products.slice(0,3).map((item, index) => (
                    <CardProduct key={index} item={item} />
                ))}
                <div className="h-full flex items-center justify-center w-1/8">
                    <i className="ri-arrow-right-long-line text-6xl rounded-xl"></i>
                </div>
            </div>
        </>

    )
}