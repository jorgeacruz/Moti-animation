import { View, Image, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { MotiView, MotiImage, MotiText,  } from 'moti';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';


export default function Beer() {
  
 return (
      <SafeAreaView style={styles.BeerContainer}>
        
        <MotiImage
          source={require('../assets/beer.png')}
          style={styles.beerImage}
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
            style={styles.titleBeer}
            from={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 140 }}
          >
          Best Beer Festival
        </MotiText>
        <MotiText
            style={{position:'absolute', width:350, color:'#000', fontSize:14, fontWeight:'500', textAlign:'center'}}
            from={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 180 }}
          >
          Limited Edition | Batch No. 2024
        </MotiText>
        <MotiText
            style={{position:'absolute', width:250, color:'#000', fontSize:60 ,fontWeight:'bold', textAlign:'center'}}
            from={{ opacity: 0,  }}
            animate={{ opacity: 1, translateY: 320 }}
            transition={{ type: 'spring', duration: 2000, delay: 500 }}
          >
            Keep Calm
        </MotiText>
        <MotiText
            style={{position:'absolute', width:250, color:'#fff', fontSize:60 ,fontWeight:'bold', textAlign:'center'}}
            from={{ opacity: 0,  }}
            animate={{ opacity: 1, translateY: 460 }}
            transition={{ type: 'spring', duration: 2000, delay: 500 }}
          >
            Drink Beer
        </MotiText>
        <MotiImage
            source={require('../assets/stars.png')}
            style={{position:'absolute', width:100, height:20, }}
            from={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 220 }}
          //  transition={{ type: 'timing', duration: 2000, delay: 500 }}
          />
          <MotiText
            style={{position:'absolute', color:'#fb0', fontSize:80, fontWeight:'bold', textAlign:'center'}}
            
            from={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 720 }}
            transition={{ type: 'spring', duration: 2000, delay: 500 }}>
            $24
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
            //duration:6000,
            //delay:6000
            }}
        >
          <TouchableOpacity 
            style={styles.botao}
            onPress={() => alert('Compra realizada com sucesso!')}
            >
            <Text style={{color:'#fff', fontSize:20}}>Comprar Agora</Text>
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
            //duration:6000,
            //delay:6000
            }}
        >
          <TouchableOpacity 
            style={styles.botaGoto}
            onPress={()=> router.replace('index')}
            >
            <FontAwesome name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </MotiView>
        
          <StatusBar hidden={true} />
      </SafeAreaView>
  );
}

