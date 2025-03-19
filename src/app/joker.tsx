import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from'expo-router';
import LottieView from 'lottie-react-native';
import { MotiView, ScrollView, MotiImage } from 'moti';
import { styles } from './styles';



export default function JokerDetails() {
 return (
   <View style={styles.bodyPage}>
    <Image source={require('../assets/joker.png')} style={styles.ImageTop}/>
        
        <ScrollView>
        <MotiView 
             
            style={{marginBottom:30}}         
            //MotiView Params animations
            from={{ opacity:0, translateY:-10 }}
            animate={{ opacity:1, translateY:20 }}
            transition={{ type:'timing', duration:700, delay:1000 }}
            >
            <Text style={styles.TextSlogan}>A loucura é como a gravidade, só precisa de um empurrãozinho!</Text>
        </MotiView>

        <View style={styles.thumbView}>

            <MotiImage 
                //Image
                source={require('../assets/joaquim.png')} style={styles.thumbImage}
                //MotiView Params animations
                from={{ scale:0, opacity:0 }}
                animate={{ scale:1, opacity:1 }}
                transition={{ type:'timing', delay:2500}} />
            <View>
                <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>Joaquin Rafael Phoenix</Text>
                <Text style={{color:'#fff'}} >October 28, 1974</Text>
                <Text style={{color:'#fff'}} >San Juan, Puerto Rico</Text>
            </View>
        </View>
        <View style={{width:'100%', paddingHorizontal:20, paddingVertical:10}}>
            <Text style={styles.textDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, purus a ultricies dapibus, leo mauris ullamcorper nisi, non posuere ante odio ac ex. Phasellus auctor luctus purus sit amet eleifend. In hac habitasse platea dictumst.
            </Text> 
            <Text style={styles.textDescription}>
                Fusce auctor, elit ac congue porttitor, mi purus feugiat lacus, at egestas velit elit at eros. Proin urna libero, egestas id commodo nec, molestie id tortor. Vivamus velit massa, eleifend a tincidunt id, molestie non elit. Aliquam rutrum purus nec augue mattis mattis. Donec placerat ligula neque, eu porttitor dui varius non. Suspendisse nec tortor at lacus consectetur maximus. Phasellus elem
            </Text> 
            <Text style={styles.textDescription}>
                 entum ligula sed odio placerat iaculis. Nunc varius ac neque nec aliquam. Vestibulum venenatis elit non justo pulvinar, porttitor suscipit nisi tristique. Vivamus nec libero nec quam consequat blandit a sit amet risus. Ut euismod tempus felis scelerisque auctor. Nullam sit amet commodo sem.
            </Text>
            <Text style={styles.textDescription}>
                Fusce auctor, elit ac congue porttitor, mi purus feugiat lacus, at egestas velit elit at eros. Proin urna libero, egestas id commodo nec, molestie id tortor. Vivamus velit massa, eleifend a tincidunt id, molestie non elit. Aliquam rutrum purus nec augue mattis mattis. Donec placerat ligula neque, eu porttitor dui varius non. Suspendisse nec tortor at lacus consectetur maximus. Phasellus elem
            </Text> 
            <Text style={styles.textDescription}>
                Fusce auctor, elit ac congue porttitor, mi purus feugiat lacus, at egestas velit elit at eros. Proin urna libero, egestas id commodo nec, molestie id tortor. Vivamus velit massa, eleifend a tincidunt id, molestie non elit. Aliquam rutrum purus nec augue mattis mattis. Donec placerat ligula neque, eu porttitor dui varius non. Suspendisse nec tortor at lacus consectetur maximus. Phasellus elem
            </Text> 
        </View>

        </ScrollView>

       <TouchableOpacity style={styles.botaoView} onPress={() => router.replace('/')}>
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