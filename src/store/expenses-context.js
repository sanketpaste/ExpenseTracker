import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2025-05-13'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 86.99,
    date: new Date('2024-03-17'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 4.5,
    date: new Date('2025-02-25'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 29.69,
    date: new Date('2023-03-19'),
  },
  {
    id: 'e5',
    description: 'A pair of t-shirts',
    amount: 54.33,
    date: new Date('2024-07-30'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2025-05-13'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 86.99,
    date: new Date('2024-03-17'),
  },
  {
    id: 'e8',
    description: 'Some bananas',
    amount: 4.5,
    date: new Date('2025-02-25'),
  },
  {
    id: 'e9',
    description: 'A book',
    amount: 29.69,
    date: new Date('2023-03-19'),
  },
  {
    id: 'e10',
    description: 'A pair of t-shirts',
    amount: 54.33,
    date: new Date('2024-07-30'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  updateExpense: (id, {description, amount, date}) => {},
  deleteExpense: id => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id, 
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const upadatedExpenses = [...state];
      upadatedExpenses[updatableExpenseIndex] = updatedItem;
      return upadatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
