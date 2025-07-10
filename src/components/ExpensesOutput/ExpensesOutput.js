import {StyleSheet, View} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummery from './ExpensesSummery';
import {GlobalStyles} from '../../constants/styles';
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

export default function ExpenesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingVertical:4,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
