import { View, Image, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { MotiView, MotiImage, MotiText,  } from 'moti';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';


export default function Water() {
  
 return (
      <SafeAreaView style={styles.waterContainer}>
        
        <MotiImage
          source={require('../assets/glass.png')}
          style={[styles.beerImage, {opacity:0.5}]}
          // Moti parameters
            from={{ opacity: 0, translateY: 500 }}
            animate={{ translateY: 150, opacity: 1 }}
            transition={{ type: 'spring' }}
            />
          <MotiImage 
            source={require('../assets/logo2.png')} 
            style={styles.logoBeer} 

            from={{ opacity: 0, translateY: 500 }}
            animate={{ opacity: 1, translateY: 60 }}
             
          />
        <MotiText
            style={[styles.titleBeer,{color:'#000', fontSize:50}]}
            from={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 135 }}
          >
          Drink Water
        </MotiText>
       
        <MotiText
            style={{position:'absolute', width:400, color:'#fff', fontSize:57 ,fontWeight:'bold', textAlign:'right', lineHeight:55}}
            from={{ opacity: 0,  }}
            animate={{ opacity: 1, translateY: 260 }}
            transition={{ type: 'spring', duration: 2000, delay: 500 }}
          >
            Save the Planet inside your Body
        </MotiText>
        
        <MotiView
          // animate parameters
          from={{
            opacity:0,
            translateY:0
          }}
          animate={{
            opacity:1,
            translateY:20,
            translateX:-100,
          }}
          transition={{
            type:'spring',
            duration:3000,
            
            }}
        >
          <TouchableOpacity 
            style={styles.botaoWater}
            onPress={() => alert('Compra realizada com sucesso!')}
            >
            <Text style={{color:'#000', fontSize:20}}>For you, Free!</Text>
          </TouchableOpacity>
        </MotiView>
        <MotiView
          from={{
            opacity:0,
            translateY:0
          }}
          animate={{
            opacity:1,
            translateY:-30,
            translateX:150,
          }}
          transition={{
            type:'spring',
            duration:4000,
            }}
        >
            <TouchableOpacity 
            style={[styles.botaGoto,{backgroundColor:'#fff'}]}
            onPress={() => router.replace('/')}
            >
            <FontAwesome name="arrow-right" size={24} color="#000" />
            </TouchableOpacity>
        </MotiView>
        
          <StatusBar hidden={true} />
      </SafeAreaView>
  );
}

