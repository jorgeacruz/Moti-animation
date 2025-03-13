import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';
import { router } from 'expo-router';

export default function App() {

  const image = require('../assets/coringa.jpg');

  function openModal(){
    router.push('./joker');
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={{width:'100%', height:'100%', opacity:0.3}} source={image} resizeMode={"cover"}>
      </ImageBackground>
      <MotiView 
        style={{position:'absolute',top:80, width:350}}
        from={{
          opacity:0,
          translateX:0
        }}
          animate={{
            opacity:1,
            translateX:20
          }}
          transition={{
            type:'timing',
            duration:700
          }}
        >
          <Text style={{color:'#fff', fontSize:30, fontWeight:'bold'}}>A loucura é como a gravidade, só precisa de um empurrãozinho!</Text>
      </MotiView>
      <View  style={styles.frame}>
        <Text style={styles.title}>Joker</Text>
      </View>
      <View style={styles.boxBotao}>
        <TouchableOpacity onPress={openModal}>
          <LottieView
            source={require('../assets/pulse.json')}
            style={{width:100, height:100}}
            autoPlay={true}
            loop={true}
          />
        </TouchableOpacity>
      </View>
      <StatusBar translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030445',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame:{
    transform:[{ rotate: '270deg'}],
    position:'absolute',
    bottom:120,
    right:-60
  },
  title:{
    color:'#ffc400',
    fontSize:100,
    fontWeight:'bold'
  },
  boxBotao:{
    position:'absolute',
    bottom:30,
    left:20,
  }
});
