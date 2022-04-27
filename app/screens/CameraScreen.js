import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

import CameraButton from '../components/CameraButton';


export default function CaneraScreen({navigation}) {
    
  return (
    <View style={styles.container} >
      <Text style = {styles.header}>נא לצלם</Text>
      {/* ------------------------------------------------ camera ------------------------------------------------ */}
      <CameraButton />

      <StatusBar style="auto" />
    </View>    
    
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
    },
  
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",            
    },

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline',
    },

    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  