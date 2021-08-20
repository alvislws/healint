export interface DummyExpenseInterface {
    categories: Array<Categories>
    userName: string
    name: string
    balance: number
}

interface Categories {
    itemAmount: number
    expenseDate: string
    itemName: string
    isDeleted: boolean
    category: string
    note: string
    id: string
}


