import { ILink } from "./link";

export interface IExpense {
    id: number;
    description: string;
    value: number;
    date: string;
    category_id: number;
    category: string
}

export interface IExpenseRequest {
    description: string;
    value: number;
    date: string;
    category_id: number;
}

export interface IExpenseResponse {
    current_page: number;
    data: IExpense[];
    last_page_url: string;
    links: ILink[];
    next_page_url: string;
    total: number
}