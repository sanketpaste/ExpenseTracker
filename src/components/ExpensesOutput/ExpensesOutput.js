import {View} from 'react-native';
import ExpensesSummery from './ExpensesSummery';
import ExpensesList from './ExpensesList';

export default function ExpensesOutput() {
  return (
    <View>
      <ExpensesSummery />
      <ExpensesList />
    </View>
  );
}
