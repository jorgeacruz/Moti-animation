import { Stack,  } from "expo-router";

export default function Layout(){
    return(
        <Stack 
            screenOptions={{
                contentStyle: { 
                    backgroundColor: "#000",
                    //borderRadius:20
                 }
            }}
            
        >
            <Stack.Screen name="index" 
                options={{
                    
                    animation: 'fade_from_bottom',
                    headerShown:false,
                    title:'Why dont u smile!!',
                    
                }}
            />
            <Stack.Screen name="joker"
                options={{
                    presentation:'modal',
                    animation: 'fade_from_bottom',
                    headerShown:false,
                    headerTintColor:'#fff',
                    title:'Why dont u smile!!',
                    headerStyle:{
                        backgroundColor:'#000'
                    }
                }}
            />
        </Stack>
    )
}