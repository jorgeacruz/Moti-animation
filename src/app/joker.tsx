import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from'expo-router';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';
import { styles } from './styles';



export default function JokerDetails() {
 return (
   <View style={styles.bodyPage}>
    <Image source={require('../assets/joker.png')} style={styles.ImageTop}/>
        
        <MotiView  
                      
            //MotiView Params animations
            from={{ opacity:0, translateY:-10 }}
            animate={{ opacity:1, translateY:20 }}
            transition={{ type:'timing', duration:700 }}
        >
            <Text style={styles.TextSlogan}>A loucura é como a gravidade, só precisa de um empurrãozinho!</Text>
       </MotiView>
       <View>
        
       </View>
       <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
           <LottieView source={require('../assets/pulse.json')} style={{width:60, height:60}} />
       </TouchableOpacity>

   </View>
  );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: '#030445',
        borderRadius:20,
    },
    
})