import {useContext, useLayoutEffect} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import IconButton from '../UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import Button from '../UI/Button';
import {ExpensesContext} from '../store/expenses-context';

function ManageExpense({route, navigation}) {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const expensesCtx = useContext(ExpensesContext);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editExpenseId, {
        description: 'Test!!!',
        amount: 29.99,
        date: new Date('2025-07-10'),
      });
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2025-07-08'),
      });
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash-alt"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
