import { StyleSheet, View, Dimensions } from "react-native";
 const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    backImage:{
        width:'100%',
        height:'100%',
    },
    BeerContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#FFC400'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#D5CFAC'
    }
   ,
    ViewSlogan:{
        position:'absolute',
        top:10,
        left:30,
        width:350,
        paddingTop:100,
    },
    TextSlogan:{
        paddingHorizontal:30,
        color:'#000', 
        fontSize:20, 
        fontWeight:'bold',
        width:'100%',
        textAlign:'center'
    },
    logo:{
        width:80,
        height:80,
    },
    wine:{
        width:300,
        height:600,
    },
    title:{
        color:'#000',
        fontSize:60,
        fontFamily:'Roboto',
        fontWeight:'bold',
        width:220
    },
    price:{
        color:'#000',
        fontSize:80,
        fontWeight:'bold',
        width:220
    },
    subTitle:{
        fontSize:20,
        fontFamily:'Roboto',
        width:200
    },
    midView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    botao:{
        backgroundColor:'#000',
        width:350,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',    
    },
    botaGoto:{
        width:50, 
        height:50, 
        backgroundColor:'#000', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:50
    },
    // beer styles
    beerImage:{
        width:width, height:'90%'
    },
    logoBeer:{
        position:'absolute', width:70, height:70
    },
    titleBeer:{
        position:'absolute',
        width:350, 
        color:'#000', 
        fontSize:28, 
        fontWeight:'bold', 
        textAlign:'center'
    },
    // Wine styles
    wineBotao:{    
        position:'absolute', 
        bottom:-190,
        left:30
    },
    winePrice:{
        color:'#000',
        fontSize:80,
        fontWeight:'bold',
        width:220,
        position:'absolute',
        bottom:-180,
        left:110
    },
    //water styles
    waterContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#77AFD6'

    },
    botaoWater:{
        backgroundColor:'#fff',
        width:350,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',    
    },

})