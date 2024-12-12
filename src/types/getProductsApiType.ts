export interface SubscriptionOption {
    frequency: string;
    eligible_delivery_days: {
        type: string;
        delivery_days?: string[];
    };
}

export interface Product {
    product_id: number;
    product_name: string;
    sku_id: number;
    sku_name: string;
    sku_size: string;
    list_price: number;
    sale_price: number;
    discount: number;
    on_sale: boolean;
    eligible_subscription_options: SubscriptionOption[];
}

export interface APIResponse {
    timestamp: string;
    success: boolean;
    status: number;
    data: Record<string, Product[]>;
}
