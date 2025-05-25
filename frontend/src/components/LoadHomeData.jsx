import {useEffect, useState} from "react";



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
                setData(data);
            }
            catch (error) {
                setError(error.constructor || "Error");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])
}