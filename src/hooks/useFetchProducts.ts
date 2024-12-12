import { useState, useEffect } from "react";
import axios from "axios";
import {APIResponse, Product} from "../types/getProductsApiType";

//const API_URL = `${process.env.REACT_APP_API_BASE_URL}/v1/vendors/1/products`;

const API_URL = `http://172.105.33.153:8080/api/v1/vendors/1/products`;

console.log(API_URL);
export const useFetchProducts = () => {
    const [data, setData] = useState<Record<string, Product[]>>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<APIResponse>(API_URL);
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    setError("Failed to fetch data");
                }
            } catch (err: any) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
