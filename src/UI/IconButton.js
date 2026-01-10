import {Pressable, StyleSheet, View} from 'react-native';
import Fontawesome5 from '@react-native-vector-icons/fontawesome5';

export default function IconButton({name, size, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Fontawesome5 name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding:6,
    marginHorizontal:8,
    marginVertical:2
    
  },
  pressed: {
    opacity: 0.75,
  },
});
