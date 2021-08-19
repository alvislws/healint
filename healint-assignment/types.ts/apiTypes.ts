export enum Category {
    foodAndBeverage = 'Food & Beverage',
    transportation = 'Transportation',
    bills = 'Bills',
    others = 'Others'
}

export interface DummyExpenseInterface {
    categories: Array<Categories>
    userName: string
    name: string
    balance: number
}

interface Categories {
    name: Category,
    transactions: Array<expenseDataInterface>
}

interface expenseDataInterface {
    amount: number
    date: string
    note: string
}
