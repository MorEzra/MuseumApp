import React, { Component, memo, useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

  
const AudioPlayer = (props) =>{  
	const [sound, setSound] = React.useState();	  

	async function playSound() {
		console.log('Loading Sound');
		const { sound } = await Audio.Sound.createAsync(
			require('../assets/audio/Alarm01.wav')
		);
		setSound(sound);

		console.log('Playing Sound');
		await sound.playAsync(); 
	}
	async function pauseSound() {
		console.log('Pausing');
		sound.pauseAsync();
	}
	
	async function replaySound() {
		console.log('Pausing');
		sound.playAsync();
	}

	React.useEffect(() => {
		return sound
			? () => {
				console.log('Unloading Sound');
				sound.unloadAsync(); }
		: undefined;
	}, [sound]);

	return (
		<View style={{ marginTop: 50 }}>
			<TouchableOpacity onPress={() => {playSound()}}>
				<Image
					source={require("../assets/images/speaker.png")}
					style={{ width: 100, height: 100 }} 
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {pauseSound()}}>
				<Image
					source={require("../assets/images/speaker.png")}
					style={{ width: 50, height: 50 }} 
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {replaySound()}}>
				<Image
					source={require("../assets/images/speaker.png")}
					style={{ width: 50, height: 50 }} 
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