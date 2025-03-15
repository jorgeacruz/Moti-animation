import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

//styles
import { styles } from './styles';

//animations Libs
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';

//expo-router
import { router } from 'expo-router';

export default function App() {

  function openModal(){
    router.replace('./joker');
  }

  return (
    <View style={styles.container}>
      
        <Swiper autoplay={true} autoplayTimeout={4.0} dotColor='#fff' activeDotColor='#fb0'>
          <View>
            <ImageBackground style={styles.sliderImage} source={require('../assets/coringa.jpg')} resizeMode={"cover"}>
            </ImageBackground>  
            
            <TouchableOpacity onPress={() => { router.replace('joker')}}>
              <LottieView source={require('../assets/pulse.json')}
                style={styles.botao}
                //Lottie params
                autoPlay={true}
                loop={true}
              />
            </TouchableOpacity>
          </View>
          <View style={{width:'100%', height:'100%'}} >
            <ImageBackground style={styles.sliderImage} source={require('../assets/deadpool.jpg')} resizeMode={"cover"}>
            </ImageBackground>
            
            <TouchableOpacity onPress={() => { router.replace('harleyquin')}}>
              <LottieView source={require('../assets/pulse.json')}
                style={styles.botao}
                //Lottie params
                autoPlay={true}
                loop={true}
              />
            </TouchableOpacity>
          </View>
          <View style={{width:'100%', height:'100%'}} >
            <ImageBackground style={styles.sliderImage} source={require('../assets/chewie.jpg')} resizeMode={"cover"}>
            </ImageBackground>
            
            <TouchableOpacity onPress={() => { router.replace('harleyquin')}}>
              <LottieView source={require('../assets/pulse.json')}
                style={styles.botao}
                //Lottie params
                autoPlay={true}
                loop={true}
              />
            </TouchableOpacity>
          </View>
        </Swiper>
       
      <StatusBar translucent/>
      
      </View>
  );
}
