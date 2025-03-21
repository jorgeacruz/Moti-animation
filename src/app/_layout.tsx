import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack 
            
            screenOptions={{
                contentStyle: { 
                    //backgroundColor: "#000",
                    //borderRadius:20
                 }
            }}
            
        >
            <Stack.Screen name="index" 
                options={{
                    presentation:'modal',
                    animation:'fade_from_bottom',
                    headerShown:false,
                    title:'Wine Details'  
                }}
            />
            
            <Stack.Screen name="beer" 
                options={{
                    presentation:'modal',
                    animation:'fade_from_bottom',
                    headerShown:false,
                    title:'Beba com moderação',
                    headerStyle:{
                        backgroundColor:'#FFC400',
                    },  
                    
                }}
            />  
            <Stack.Screen name="water" 
                options={{
                    presentation:'modal',
                    animation:'fade_from_bottom',
                    headerShown:false,
                    title:'Beba sem moderação',
                    headerStyle:{
                        backgroundColor:'#FFC400',
                    },  
                    
                }}
            />  
        </Stack>
    )
}