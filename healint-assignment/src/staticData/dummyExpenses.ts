import { Category, DummyExpenseInterface } from "../types.ts/apiTypes";

export const dummyExpensesData: DummyExpenseInterface = {
    userName: 'alvis',
    name: 'alvis',
    balance: 100000,
    categories: [
        {
            name: Category.foodAndBeverage,
            transactions: [
                {
                    amount: -5,
                    date: '19/08/2021',
                    note: ''
                }
            ] 
        },
        {
            name: Category.transportation,
            transactions: [
                {
                    amount: -2,
                    date: '18/08/2021',
                    note: ''
                },
                {
                    amount: -4,
                    date: '18/08/2021',
                    note: ''
                },
                {
                    amount: -2,
                    date: '13/08/2021',
                    note: ''
                }
            ]
        },
        {
            name: Category.bills,
            transactions: [
                {
                    amount: -40,
                    date: '20/08/2021',
                    note: 'electricity'
                },
                {
                    amount: -30,
                    date: '20/08/2021',
                    note: 'water'
                },
                {
                    amount: -20,
                    date: '20/08/2021',
                    note: 'internet bills'
                },
                {
                    amount: -10,
                    date: '20/08/2021',
                    note: 'phone bills'
                },
                {
                    amount: -60,
                    date: '20/08/2021',
                    note: 'credit card'
                }
            ]
        },
        {
            name: Category.others,
            transactions: [
                {
                    amount: -40,
                    date: '30/12/2020',
                    note: 'games'
                },
                {
                    amount: -30,
                    date: '11/03/2021',
                    note: 'birthday gift'
                }
            ]
        }
    ]
}


