import { View, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './styles';
import { MotiView, MotiImage, MotiText, SafeAreaView } from 'moti';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
export default function App() {
  
 return (
  <SafeAreaView style={styles.container}>
  <ImageBackground style={{width:width, height:height}} source={require('../assets/back.png')} resizeMode='cover'>
    
  <View style={{flex:1, alignItems:'center', justifyContent:'flex-start'}}>
    <MotiText
      style={styles.TextSlogan}
      // animate parameters
      from={{
        opacity:0,
        translateY:0
      }}
      animate={{
        opacity:1,
        translateY:60
      }}
      transition={{
        type:'spring',
        duration:2000,
        delay:500
      }}
    >
     Perfect Pairing: Seafood, creamy pasta, and soft cheeses.
    </MotiText>
    <MotiImage
       source={require('../assets/logo.png')} 
       style={styles.logo}
       // animate parameters
       from={{
        opacity:0,
        translateY:0
       }}
       animate={{
        opacity:1,
        translateY:80,
       }}
       transition={{
        type:'spring',
        duration:2500,
        delay:1500}}
    />
    
  </View >
  <MotiImage
     source={require('../assets/wine.png')} 
     style={[styles.wine,{position:'absolute', top:140}]}
     // animate parameters
     from={{
      opacity:0,
      translateY:500
     }}
     animate={{
      opacity:1,
      translateY:180,
      translateX:10
     }}
     transition={{
      type:'spring',
      duration:3000,
      delay:3000,
      repeatReverse:true
    }}
  />
    <MotiText
      style={styles.title}
      // animate parameters
      from={{
        opacity:0,
        translateX:0
      }}
      animate={{
        opacity:1,
        translateX:190,
        translateY:-350,
      }}
      transition={{
        type:'spring',
        duration:4000,
        delay:3500
        }}
    >
        VÉRITÉ BLANC
    </MotiText>
    <MotiText
      style={[styles.subTitle]}
      // animate parameters
      from={{
        opacity:0,
        translateX:0
      }}
      animate={{
        opacity:1,
        translateX:210,
        translateY:-300,
      }}
      transition={{
        type:'spring',
        duration:4000,
        delay:4000
        }}
      >
    Grand Réserve | 2024 Château du Soleil
    
            <MotiView
              style={{flexDirection:'column', justifyContent:'center', alignItems:'flex-start', gap:5,}}
              // animate parameters
              from={{
                opacity:0,
                translateX:-50
              }}
              animate={{
                opacity:1,
                translateX:55,
                translateY:45,
              }}
              transition={{
                type:'spring',
                duration:4500,
                delay:4200
                }}
              >
                <Text style={{fontSize:18}}>🍇 Chardonnay</Text>
                <Text style={{fontSize:18}}>🌍 France </Text>
                <Text style={{fontSize:18}}>📍 ABV: 13.5%</Text>
            </MotiView>
    </MotiText>
    <MotiText
      style={styles.winePrice}
      // animate parameters
      from={{
        opacity:0,
        translateX:300
      }}
      animate={{
        opacity:1,
        translateX:160,
        translateY:-300,
      }}
      transition={{
        type:'spring',
        duration:4800,
       delay:5000
        }}
      
    >
        $42
    </MotiText>
    
            <MotiView
              style={[styles.wineBotao]}
              // animate parameters
              from={{
                opacity:0,
                translateX:-150
              }}
              animate={{
                opacity:1,
                translateY:-250,
                translateX:-100,
              }}
              transition={{
                type:'spring',
                duration:5000,
               delay:5200
                }}
            >
              <TouchableOpacity 
              style={styles.botao}
              onPress={() => alert('Compra realizada com sucesso!')}
              >
                <Text style={{color:'#fff', fontSize:20}}>Buy Right Now</Text>
              </TouchableOpacity>
            </MotiView>
            
                <MotiView
                style={{position:'absolute', bottom:-240, left:120}}
                  // animate parameters
                  from={{
                    opacity:0,
                    translateX:0
                  }}
                  animate={{
                    opacity:1,
                    translateY:-300,
                    translateX:220,
                  }}
                  transition={{
                    type:'spring',
                    duration:5200,
                    delay:5600
                    }}
                >
                    <TouchableOpacity 
                    style={styles.botaGoto}
                    onPress={()=> router.replace('./beer')}
                    >
                      <FontAwesome name="arrow-right" size={24} color="#fff" />
                    </TouchableOpacity>
                  </MotiView>
                  
    
    </ImageBackground>
    </SafeAreaView>
  );
}

