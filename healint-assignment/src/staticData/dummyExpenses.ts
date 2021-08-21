import { DummyExpenseInterface } from "../types.ts/apiTypes";

export const dummyExpensesData: DummyExpenseInterface = {
    userName: 'alvis',
    name: 'alvis',
    balance: 100000,
    categories: [
        {
            itemAmount: 800,
            expenseDate: "2021-05-17",
            isDeleted: false,
            category: "Education",
            note: '',
            id: "1"
          },
          {
            itemAmount: 3000,
            expenseDate: "2021-04-01",
            isDeleted: false,
            category: "Bills",
            note: '',
            id: "2"
          },
          {
            itemAmount: 800,
            expenseDate: "2021-03-02",
            isDeleted: false,
            category: "Education",
            note: '',
            id: "3"
          },
          {
            itemAmount: 4000,
            expenseDate: "2021-04-01",
            isDeleted: false,
            category: "Food and Beverage",
            note: '',
            id: "4"
          },
          {
            itemAmount: 450,
            expenseDate: "2021-10-22",
            isDeleted: false,
            category: "Food and Beverage",
            note: '',
            id: "5"
          }
    ]
}


