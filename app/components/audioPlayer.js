import React, { Component, memo, useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


  
const AudioPlayer = (props) =>{  
	const [count, setCount] = useState(0);
  	const audioHandler = () => {setCount(prevCount => prevCount + 1); console.log("playmusic")};
	
	return (
	<View style={{ marginTop: 50 }}>
		<Text>Count: {count}</Text>
		<TouchableOpacity onPress={() => {console.log("playmusic"); audioHandler()}}>
			<Image
				source={require("../assets/images/speaker.png")}
				style={{ width: 100, height: 100 }} 
			/>
		</TouchableOpacity>
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

export default AudioPlayer