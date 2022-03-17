import React,{ useState,useEffect }  from 'react'

import { StyleSheet,SafeAreaView, Text, View,TouchableOpacity, Image,Dimensions } from 'react-native';

import {collection,getDocs} from  "@firebase/firestore";
import {NavigationContainer}  from '@react-navigation/native';

const Apps =()=> {
  <View style={{flex:1}}>
    <NavigationContainer>
    <Mystack/>
  </NavigationContainer>

  </View>
  
    
  }

  export default Apps;
