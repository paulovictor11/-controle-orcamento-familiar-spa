interface IByCategory {
    id: number;
    name: string;
    total: number;
}

export interface IResume {
    totalOfIncomes: number;
    totalOfExpenses: number;
    totalBalance: number;
    totalByCategories: IByCategory[];
}