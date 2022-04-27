import React, { Component, memo, useEffect, useRef, useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

  
const CameraButton = (props) =>{  
	const [count1, setCount1] = useState(0);
  	const onPress = () => setCount1(prevCount => prevCount + 1);

	return (
		<View style={{marginTop: 50}}>
			<Text>Count1: {count1}</Text>
			<Button 
          	title="open camera"
          	onPress={onPress}>
      		</Button>
      		<Image
        	source={require("../assets/images/camera.png")}
        	style={{ width: 100, height: 100 }} 
      		/>	
		</View>
	);
};
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

  });

export default CameraButton
