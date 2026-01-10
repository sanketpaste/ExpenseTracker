import {useContext} from 'react';
import ExpenesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpenesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered Expenses foud!.."
    />
  );
}
export default AllExpenses;
