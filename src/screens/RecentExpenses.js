import ExpenesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {useContext} from 'react';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../utils/date';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <ExpenesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No Expenses Register for last 7 days."
    />
  );
}
export default RecentExpenses;
