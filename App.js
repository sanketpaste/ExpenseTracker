import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import RecentExpenses from './src/screens/RecentExpenses';
import AllExpenses from './src/screens/AllExpenses';
import ManageExpense from './src/screens/ManageExpense';
import {GlobalStyles} from './src/constants/styles';
import Fontawesome5 from '@react-native-vector-icons/fontawesome5';
import IconButton from './src/UI/IconButton';
import ExpensesContextProvider from './src/store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton
            name="plus-square"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses')
            }}
          />
        ),
      })}>
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'Expenses',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:'white'
        }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpense} options={{
            presentation:'modal'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
