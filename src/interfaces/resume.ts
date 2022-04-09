interface ByCategory {
    id: number;
    name: string;
    total: number;
}

export interface Resume {
    totalOfIncomes: number;
    totalOfExpenses: number;
    totalBalance: number;
    totalByCategories: ByCategory[];
}