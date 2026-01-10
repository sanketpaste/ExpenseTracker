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

// Sanket paste...added


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


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   Switch,
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // ----- Active Tasks Screen -----
// function ActiveTasksScreen({ tasks, setTasks, doneTasks, setDoneTasks, darkMode, toggleDarkMode }) {
//   const [task, setTask] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const addOrUpdateTask = () => {
//     if (task.trim() === "") return;
//     if (editingId) {
//       setTasks((prev) =>
//         prev.map((item) =>
//           item.id === editingId ? { ...item, text: task } : item
//         )
//       );
//       setEditingId(null);
//     } else {
//       setTasks((prev) => [...prev, { id: Date.now().toString(), text: task }]);
//     }
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     setTasks((prev) => prev.filter((item) => item.id !== id));
//   };

//   const editTask = (id) => {
//     const t = tasks.find((item) => item.id === id);
//     setTask(t.text);
//     setEditingId(id);
//   };

//   const markDone = (id) => {
//     const t = tasks.find((item) => item.id === id);
//     setDoneTasks((prev) => [...prev, t]);
//     setTasks((prev) => prev.filter((item) => item.id !== id));
//   };

//   const renderTask = ({ item }) => (
//     <View style={[styles.taskCard, darkMode && styles.taskCardDark]}>
//       <Text style={[styles.taskText, darkMode && styles.taskTextDark]}>{item.text}</Text>
//       <View style={styles.taskActions}>
//         <TouchableOpacity
//           style={[styles.actionButton, styles.editButton]}
//           onPress={() => editTask(item.id)}
//         >
//           <Text style={styles.actionText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.actionButton, styles.doneButton]}
//           onPress={() => markDone(item.id)}
//         >
//           <Text style={styles.actionText}>Done</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.actionButton, styles.deleteButton]}
//           onPress={() => deleteTask(item.id)}
//         >
//           <Text style={styles.actionText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView
//       style={[styles.container, darkMode && styles.containerDark]}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       {/* Header Row with Title & Dark Mode Switch */}
//       <View style={styles.headerRow}>
//         <Text style={[styles.heading, darkMode && styles.headingDark]}>
//           My ToDo List
//         </Text>
//         <Switch value={darkMode} onValueChange={toggleDarkMode} />
//       </View>

//       {/* Input */}
//       <View style={styles.inputRow}>
//         <TextInput
//           style={[styles.input, darkMode && styles.inputDark]}
//           placeholder="Add a new task"
//           placeholderTextColor={darkMode ? "#aaa" : "#666"}
//           value={task}
//           onChangeText={setTask}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addOrUpdateTask}>
//           <Text style={styles.addButtonText}>
//             {editingId ? "Update" : "Add"}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* List */}
//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         renderItem={renderTask}
//         contentContainerStyle={styles.listContainer}
//       />
//     </KeyboardAvoidingView>
//   );
// }

// // ----- Done Tasks Screen -----
// function DoneTasksScreen({ doneTasks, darkMode }) {
//   const renderDone = ({ item }) => (
//     <View style={[styles.taskCard, darkMode && styles.taskCardDark]}>
//       <Text style={[styles.taskText, darkMode && styles.taskTextDark]}>
//         {item.text}
//       </Text>
//     </View>
//   );

//   return (
//     <View style={[styles.container, darkMode && styles.containerDark]}>
//       <Text style={[styles.heading, darkMode && styles.headingDark]}>
//         Done Tasks
//       </Text>
//       <FlatList
//         data={doneTasks}
//         keyExtractor={(item) => item.id}
//         renderItem={renderDone}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [doneTasks, setDoneTasks] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Active">
//           {() => (
//             <ActiveTasksScreen
//               tasks={tasks}
//               setTasks={setTasks}
//               doneTasks={doneTasks}
//               setDoneTasks={setDoneTasks}
//               darkMode={darkMode}
//               toggleDarkMode={toggleDarkMode}
//             />
//           )}
//         </Tab.Screen>
//         <Tab.Screen name="Done">
//           {() => (
//             <DoneTasksScreen doneTasks={doneTasks} darkMode={darkMode} />
//           )}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F7F8FA",
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   containerDark: {
//     backgroundColor: "#1E1E1E",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   headingDark: {
//     color: "#fff",
//   },
//   headerRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   inputRow: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     borderRadius: 25,
//     fontSize: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   inputDark: {
//     backgroundColor: "#333",
//     color: "#fff",
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     paddingHorizontal: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 25,
//     marginLeft: 10,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "600",
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   taskCard: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   taskCardDark: {
//     backgroundColor: "#333",
//   },
//   taskText: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 10,
//   },
//   taskTextDark: {
//     color: "#fff",
//   },
//   taskActions: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   actionButton: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     marginLeft: 8,
//   },
//   editButton: {
//     backgroundColor: "#2196F3",
//   },
//   deleteButton: {
//     backgroundColor: "#F44336",
//   },
//   doneButton: {
//     backgroundColor: "#9C27B0",
//   },
//   actionText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
// });
