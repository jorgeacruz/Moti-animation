import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { styles } from './styles';
import { MotiView, MotiImage, MotiText } from 'moti';

export default function app() {
 return (
    <ImageBackground style={styles.backImage} source={require('../assets/back.png')} resizeMode={"cover"}>
      <View style={styles.container}>
        <MotiText
          style={styles.TextSlogan}
          // animate params
          from={{
            opacity:0,
            translateY:0
          }}
          animate={{
            opacity:1,
            translateY:120
          }}
          transition={{
            type:'timing',
            duration:2000,
            delay:500
          }}
        >
         Perfect Pairing: Seafood, creamy pasta, and soft cheeses.
        </MotiText>

        <MotiImage
           source={require('../assets/logo.png')} 
           style={styles.logo}
           // animate params
           from={{
            opacity:0,
            translateY:0
           }}
           animate={{
            opacity:1,
            translateY:150,
           }}
           transition={{
            type:'spring',
            duration:5000,
            delay:2000}}
        />
        <MotiImage
           source={require('../assets/wine.png')} 
           style={styles.wine}
           // animate params
           from={{
            opacity:0,
            translateY:500
           }}
           animate={{
            opacity:1,
            translateY:220,
            translateX:-60
           }}
           transition={{
            type:'spring',
            duration:5000,
            delay:3000,
            repeatReverse:true
          }}
        />
        <MotiText
          style={styles.title}
          // animate params
          from={{
            opacity:0,
            translateX:150
          }}
          animate={{
            opacity:1,
            translateX:80,
            translateY:-380,
          }}
          transition={{
            type:'spring',
            duration:6000,
            delay:4000
            }}
          
        >
            VÉRITÉ BLANC
        </MotiText>

        <MotiText
          style={styles.subTitle}
          // animate params
          from={{
            opacity:0,
            translateX:150
          }}
          animate={{
            opacity:1,
            translateX:80,
            translateY:-360,
          }}
          transition={{
            type:'spring',
            duration:6000,
            delay:5000
            }}
          >
        Grand Réserve | 2024 Château du Soleil
        </MotiText>

        <MotiView
          style={{flexDirection:'column', justifyContent:'center', alignItems:'flex-start', gap:5,}}
          // animate params
          from={{
            opacity:0,
            translateX:150
          }}
          animate={{
            opacity:1,
            translateX:120,
            translateY:-320,
          }}
          transition={{
            type:'spring',
            duration:6000,
            delay:5000
            }}
          >
            <Text style={{fontSize:18}}>🍇 Chardonnay</Text>
            <Text style={{fontSize:18}}>🌍 France </Text>
            <Text style={{fontSize:18}}>📍 ABV: 13.5%</Text>
        </MotiView>

        <MotiText
          style={styles.price}
          // animate params
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
            duration:6000,
            delay:4000
            }}
          
        >
            $42
        </MotiText>


    
   
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});