import { Stack,  } from "expo-router";

export default function Layout(){
    return(
        <Stack 
            screenOptions={{
                contentStyle: { 
                    backgroundColor: "#000",
                    borderRadius:20
                 }
            }}
            
        >
            <Stack.Screen name="index" 
                options={{
                    presentation:'modal',
                    animation:'fade_from_bottom',
                    headerShown:false  
                }}
            />
            
            <Stack.Screen name="joker" 
                options={{
                    presentation:'modal',
                    animation:'fade_from_bottom',
                    headerShown:false,
                    title:'Joker Details'  
                }}
            />
            <Stack.Screen name="harleyquin" 
                options={{
                    presentation:'modal',
                    animation:'fade_from_bottom',
                    headerShown:false,
                    title:'Joker Details'  
                }}
            />
            
        </Stack>
    )
}