import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import {KeyboardAvoidingView,TextInput, Text, StyleSheet, View,TouchableOpacity,ScrollView  } from 'react-native';
import {authentication} from '../Firebase/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";






const loginScreen=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isSignedIn,setIsSignedIn]=useState(false);

    const SignedInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((re) => { setIsSignedIn(true) })
            .catch((re) => {
                console.log(re);
            });
    };
    
    const Signoutuser = () => {
        signOut(authentication)
            .then((re) => { setIsSignedIn(false) })
            .catch((re) => {
                console.log(re);
            });
    };
    const registerUser = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((re) => { console.log(re); })
            .catch((re) => {
                console.log(re);
            });
    };
    return (

        <KeyboardAvoidingView style={styles.Container} behavior='padding'>
            <View style={{padding:20}}>
                <View style={styles.inputContainer}>
                <TextInput placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input} />
                <TextInput placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry />
                  
         </View>
       
            <View style={styles.buttoncontainer}> 

            {!isSignedIn === true?
                  [<TouchableOpacity style={styles.button} onPress={SignedInUser}>
                  <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>,
              <TouchableOpacity style={[styles.button, styles.buttonoutline]} onPress={registerUser}>
              <Text style={styles.buttonoutlinetext}>register</Text>
          </TouchableOpacity>]
              :<TouchableOpacity style={[styles.button, styles.buttonoutline]} onPress={Signoutuser}>
              <Text style={styles.buttonoutlinetext}>signout</Text>
          </TouchableOpacity>   
                }
                  
            </View>
           
                </View>
            
             
           

        </KeyboardAvoidingView>
    );

}

export default loginScreen;

const styles = StyleSheet.create({
    Container:{
        flex:1,
      
     
      


    },

    inputContainer:{
        
        width:'80'

        
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5

    },
    button:{
        width:'100%',
        backgroundColor:"#0782F9",
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',

    },
    buttoncontainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        marginTop:50,
        marginVertical:10



    },
    buttonoutline:{
    backgroundColor:'white',
    marginTop:5,
    borderWidth:2,
    
    },
    buttontext:{
        color:'white',
        fontWeight:'bold',
        fontSize:10
    },

    buttonoutlinetext:{
        color:'blue',
        fontWeight:'bold',
        fontSize:10
    },
})
;
