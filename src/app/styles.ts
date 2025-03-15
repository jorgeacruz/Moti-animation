import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewSlogan:{
        position:'absolute',
        top:10,
        left:30,
        width:350,
        paddingTop:100,
    },
    TextSlogan:{
        color:'#fff', 
        fontSize:20, 
        fontWeight:'bold',
        width:380,
        textAlign:'center'
    },
    midView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        width:'100%'
    },
    sliderImage:{
        width:'100%',
        height:'100%'
    },
    botao:{
        position:'absolute',
        bottom:20,
        width:100, 
        height:100,
        margin:50
    },
    // Internal Pages
    ImageTop:{
        width:440,
        height:200,
        borderTopRightRadius:35,
        borderTopLeftRadius:35
    },
    bodyPage:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: '#030445',
        borderRadius:20,
    },
    
})