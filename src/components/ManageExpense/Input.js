import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../constants/styles";

const Input =({lable,textInputConfig})=>{
    const inputStyle =[styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyle.push(styles.inputMultiline)
    }
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.lable}>{lable}</Text>
            <TextInput style={styles.input} {...textInputConfig}/>
        </View> 
    )
}

export default Input;

const styles= StyleSheet.create({
    inputContainer:{
      marginHorizontal:4,
      marginVertical:8,
    },
    lable:{
     fontSize:12, 
     color:GlobalStyles.colors.primary100,
     marginBottom:4,
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18,
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    }
})