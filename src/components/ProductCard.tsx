import React from "react";
import { Product } from "../types/getProductsApiType";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className="product-card">
        <h3>{product.sku_name}</h3>
        <p>Size: {product.sku_size}</p>
        <p>Price: ₹{product.sale_price}</p>
        {product.on_sale && <p>Discount: {product.discount}%</p>}
        {product.eligible_subscription_options.map((option, index) => (
            <div key={index}>
                <p>Frequency: {option.frequency}</p>
                <p>Delivery Days: {option.eligible_delivery_days.delivery_days?.join(", ") || "Flexible"}</p>
            </div>
        ))}
    </div>
);
