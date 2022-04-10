import { ILink } from "./link";

export interface IIncome {
    id: number;
    description: string;
    value: number;
    date: string;
}

export interface IIncomeRequest extends Omit<IIncome, 'id'> {}

export interface IIncomeResponse {
    current_page: number;
    data: IIncome[];
    last_page_url: string;
    links: ILink[];
    next_page_url: string;
    total: number
}