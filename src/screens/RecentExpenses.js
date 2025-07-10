import {Text,View} from 'react-native';
import ExpenesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses(){
    return (
       <ExpenesOutput expensesPeriod='Last 7 Days'/>
    )
}
export default RecentExpenses;