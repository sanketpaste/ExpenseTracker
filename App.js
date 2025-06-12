import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import AllExpenses from './src/screens/AllExpenses';
import RecentExpenses from './src/screens/RecentExpenses';
import ManageExpense from './src/screens/ManageExpense';
import { GlobalStyles } from './src/constants/styles';
import FontAwesome5 from '@react-native-vector-icons/fontawesome5'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTab.Navigator screenOptions={{
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500
    }}>
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title:'Recent Expenses',
        tabBarLabel:'Recent',
        tabBarIcon:({size,color})=>(
          <FontAwesome5 name='hourglass' size={size} color={color}/>
        )
      }} />
            <BottomTab.Screen name="AllExpenses" component={AllExpenses} options={{
              title:'All Expenses',
              tabBarLabel:'All Expenses',
              tabBarIcon:({size,color})=>(
                <FontAwesome5 name='calendar' size={size} color={color}/>
              )
            }}/>

    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
