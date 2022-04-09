import { Link } from "./link";

export interface Income {
    id: number;
    description: string;
    value: number;
    date: string;
}

export interface IncomeRequest extends Omit<Income, 'id'> {}

export interface IncomeResponse {
    current_page: number;
    data: Income[];
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    total: number
}