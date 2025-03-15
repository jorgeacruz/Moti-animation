import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from'expo-router';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';



export default function JokerDetails() {
 return (
   <View style={styles.container}>
    <Image source={require('../assets/joker.png')} style={styles.ImageTop}/>
        <MotiView  style={{}}
                      //MotiView Params animations
                      from={{ opacity:0, translateX:0 }}
                      animate={{ opacity:1, translateX:20 }}
                      transition={{ type:'timing', duration:700 }}
                      >
                      <Text style={{}}>A loucura é como a gravidade, só precisa de um empurrãozinho!</Text>
                    </MotiView>
   
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
        backgroundColor: '#030445',
        borderRadius:20,
    },
    ImageTop:{
        width:440,
        height:200,
        borderTopRightRadius:35,
        borderTopLeftRadius:35
    }
})