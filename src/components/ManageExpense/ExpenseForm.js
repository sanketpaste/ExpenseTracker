import { View} from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountCangeHandler = () => {};
  return (
    <View>
      <Input
        lable="Amaount"
        textInputConfig={{
          keyboradType: 'decimal-pad',
          onChangeText: amountCangeHandler,
        }}
      />

      <Input
        lable="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        lable="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect:false,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
