import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPage: React.FC = () => {
    const [data, setData] = useState<Record<string, Product[]>>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get<APIResponse>("http://localhost:8080/api/v1/vendors/1/products");
                    setData(response.data.data);
                    setLoading(false);
                } catch (err) {
                    setError("Failed to fetch products");
                    setLoading(false);
                }
            };

            fetchProducts();
        },
        []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Available Products</h1>
            {Object.keys(data).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div>
                        {data[category].map((product) => (
                            <div key={product.sku_id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                                <h3>{product.sku_name}</h3>
                                <p>Size: {product.sku_size}</p>
                                <p>Price: ₹{product.sale_price} (List: ₹{product.list_price})</p>
                                <p>Discount: {product.discount}%</p>
                                <p>Effective Date: {product.effective_date}</p>
                                <p>On Sale: {product.on_sale ? "Yes" : "No"}</p>
                                <h4>Eligible Subscription Options:</h4>
                                <ul>
                                    {product.eligible_subscription_options.map((option, index) => (
                                        <li key={index}>
                                            <p>Frequency: {option.frequency}</p>
                                            {option.eligible_delivery_days.type === "FIXED" && option.eligible_delivery_days.delivery_days ? (
                                                <p>Delivery Days: {option.eligible_delivery_days.delivery_days.join(", ")}</p>
                                            ) : (
                                                <p>Delivery Type: {option.eligible_delivery_days.type}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
