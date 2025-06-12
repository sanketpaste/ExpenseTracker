import {View,Text, Button, StyleSheet} from 'react-native';

function CounterButton({count,setCount}){
    const setCount = ()=>{
        count+1
    }
return(
    <View>
       <Button title='Increment' onPress={setCount}/>
       <Button title='Decrement' onPress={setCount}/>
    </View>
)
  
}

export default CounterButton;

const styles =StyleSheet.create({
    buttonContainer:{
        flexDirection:'row'
    }
})