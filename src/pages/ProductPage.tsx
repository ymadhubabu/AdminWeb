import React from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { ProductList } from "../components/ProductList";

export const ProductPage: React.FC = () => {
    const { data, loading, error } = useFetchProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-page">
            <h1>Products</h1>
            <ProductList data={data} />
        </div>
    );
};
