import React, {useState, useEffect} from 'react';
import axios from "axios";

const useFetchAPi = (url) => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
                
            try{
                const results = await axios.get(url)
                setApiData(results.data)
            } catch(error){
                setError(error)
            }

            setLoading(false);
        }

        fetchData();
        
    }, [url]);

    const reFetchData = async() => {
        setLoading(true);
            const results = await axios.get(url)
            setApiData(results.data)
        try{
            
        } catch(error){
            setError(error)
        }

        setLoading(false);
    }

    return { apiData, loading, error, reFetchData };
}

//1:39:00

export default useFetchAPi;
