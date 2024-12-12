import React from "react";
import { Product } from "../types/getProductsApiType";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
    data: Record<string, Product[]>;
}

export const ProductList: React.FC<ProductListProps> = ({ data }) => (
    <div className="product-list">
        {Object.keys(data).map((category) => (
            <div key={category} className="category">
                <h2>{category}</h2>
                <div className="products">
                    {data[category].map((product) => (
                        <ProductCard key={product.sku_id} product={product} />
                    ))}
                </div>
            </div>
        ))}
    </div>
);
