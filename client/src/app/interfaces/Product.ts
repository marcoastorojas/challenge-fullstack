export interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
}

export interface ProductResponse {
    ok: boolean;
    data: Product[];
    prevPage?: string;
    nextPage?: string;
}