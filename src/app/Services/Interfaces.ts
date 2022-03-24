export interface ApiCall {
    message: string;
    status:number;
    data:any
}

export interface Companys {
    id: number;
    is_claimed: number;
    name: string;
    description: string;
    email: string;
    phone: string;
    website: string;
    menu_url: string;
    category_ids: null;
    amenities: null;
    tags: null;
    is_active: number;
    created_at: string;
    updated_at: string;
}