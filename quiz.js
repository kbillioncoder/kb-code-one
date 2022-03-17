import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet,SafeAreaView, Text, View,TouchableOpacity, Image,Dimensions } from 'react-native';



const Quiz=({navigation})=>{
    return(
        <View style={{padding:20}}>
        <View style={{marginVertical:80}}>
    <Text style={{fontSize:25,fontWeight:"bold"}}>Q1. What is the name of the owner of this App</Text> 
        </View>
        
        <View style={{alignItems:"center",marginBottom:20}}>
            <TouchableOpacity style={styles.container} >
                <Text style={styles.textstyle}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textstyle}>Option 2</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textstyle}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textstyle}>Option 4</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between",paddingVertical:20}}>
            <TouchableOpacity style={{backgroundColor:"red",width:100,height:50,borderRadius:20,justifyContent:'center',alignItems:"center"}} onPress={()=>navigation.navigate("Welcome")}>
                <Text style={styles.textstyle}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"green",width:100,height:50,borderRadius:20,justifyContent:'center',alignItems:"center"}}>
                <Text style={styles.textstyle}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
    

};


export default Quiz;

const styles=StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:60,
        width:300,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:18
    
    },
    textstyle:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        
    },
   


    });