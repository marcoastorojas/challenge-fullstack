export interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
}

export interface ProductResponse {
    ok:boolean;
    allEntries:number;
    totalPages:number;
    data:Product[];
    currentPage:number;
    prevPage:number|null;
    nextPage:number|null;
}