import { StyleSheet, Text } from "react-native";

function Counter({count}){
   return  <Text>Count: {count}</Text>
}

export default Counter;

const styles = StyleSheet.create({
    text:{
        fontSize:24,
    }
})