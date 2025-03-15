import { View, Text, StyleSheet, TouchableOpacity, Image, Easing } from 'react-native';
import { router } from'expo-router';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';


export default function Harleyquin() {
 return (
   <View style={styles.container}>
    <Image source={require('../assets/coringa.jpg')} style={styles.ImageTop}/>
    
   
       <TouchableOpacity onPress={() => router.replace('/')}>
           <LottieView source={require('../assets/pulse.json')} style={{width:60, height:60}} />
       </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: '#5b0303',
        borderRadius:20,
    },
    ImageTop:{
        width:440,
        height:200,
        borderTopRightRadius:35,
        borderTopLeftRadius:35
    }
})