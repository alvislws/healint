import { DummyExpenseInterface } from "../types.ts/apiTypes";

export const dummyExpensesData: DummyExpenseInterface = {
    userName: 'alvis',
    name: 'alvis',
    balance: 100000,
    categories: [
        {
            itemAmount: 800,
            expenseDate: "22.05.2020",
            itemName: "Harry Potter Book 1",
            isDeleted: false,
            category: "Education",
            note: '',
            id: "1"
          },
          {
            itemAmount: 3000,
            expenseDate: "02.04.2020",
            itemName: "School Fee",
            isDeleted: false,
            category: "Bills",
            note: '',
            id: "2"
          },
          {
            itemAmount: 800,
            expenseDate: "02.04.2020",
            itemName: "Harry Potter Book 1",
            isDeleted: false,
            category: "Education",
            note: '',
            id: "3"
          },
          {
            itemAmount: 4000,
            expenseDate: "02.04.2020",
            itemName: "Bought Many Vegetables",
            isDeleted: false,
            category: "Food and Beverage",
            note: '',
            id: "4"
          },
          {
            itemAmount: 450,
            expenseDate: "10.01.2010",
            itemName: "Grocery",
            isDeleted: false,
            category: "Food and Beverag",
            note: '',
            id: "5"
          }
    ]
}


