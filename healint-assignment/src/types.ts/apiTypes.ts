export interface DummyExpenseInterface {
    categories: Array<Categories>
    userName: string
    name: string
    balance: number
}

export type Categories = {
    itemAmount: number
    expenseDate: string
    isDeleted: boolean
    category: string
    note: string
    id: string
}


// export interface DummyExpenseInterface {
//     categories: Array<Category>
//     userName: string
//     name: string
//     balance: number
// }

// interface TransactionList {
//     itemAmount: number
//     expenseDate: string
//     note: string
//     isDeleted: boolean
//     id: string
// }




// interface Category {
//     category: 'Bill'
//     transactionList: Array<TransactionList>
// }