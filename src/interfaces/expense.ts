import { Link } from "./link";

export interface Expense {
    id: number;
    description: string;
    value: number;
    date: string;
    category_id: number;
    category: string
}

export interface ExpenseRequest {
    description: string;
    value: number;
    date: string;
    category_id: number;
}

export interface ExpenseResponse {
    current_page: number;
    data: Expense[];
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    total: number
}