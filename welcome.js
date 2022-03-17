import { StatusBar } from 'expo-status-bar';

import { StyleSheet,SafeAreaView, Text, View,TouchableOpacity, Image,Dimensions } from 'react-native';



const Welcome=({navigation})=>{
    return(
    <View style={{justifyContent:"center",
    alignItems:"center",}}>
        <View style={{
        flex:1,
        backgroundColor:'white',
        width: 100,
        height: 100, 
        padding:200,
        paddingTop:250,
        justifyContent:"center",
        alignItems:"center",
        
    }}
        
        > 

<Image source={require('./image/quiz.png')} style={{width:200,height:200}}/>
        </View>
       
        <View style={{
        flex:1,
        backgroundColor:'green',
        width: 100,
        height: 100,
        padding:200,
        paddingBottom:380,
        alignItems:"center",
        justifyContent:"center",
        

        borderRadius:1000,
        
        }}>
       

       
       <TouchableOpacity style={{padding:20,width:200,height:70,borderRadius:30,backgroundColor:'red',alignItems:"center",justifyContent:"center"}} onPress={()=>navigation.navigate("Quiz")}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Start</Text>
        </TouchableOpacity>
       
        
        </View>
        
        
     <View>
    
     </View>


    </View>);
    
}

export default Welcome; 