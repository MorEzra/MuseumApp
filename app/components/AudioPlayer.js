import React, { Component, memo, useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

  
const AudioPlayer = (props) =>{  
	const [sound, setSound] = React.useState();	  

	async function playSound() {
		if(sound) {
			console.log('Playing Sound');
			await sound.playAsync()
		} else {
			console.log('Loading Sound');
			const { sound } = await Audio.Sound.createAsync(
				require('../assets/audio/Alarm01.wav')
			);
			setSound(sound);
			console.log('Playing Sound');
			
			await sound.playAsync()
		}
	}
	async function pauseSound() {
		console.log('Pausing');
		sound.pauseAsync();
	}

	React.useEffect(() => {
		return sound
			? () => {
				console.log('Unloading Sound');
				sound.unloadAsync(); }
		: undefined;
	}, [sound]);

	return (
		<View style={styles.audio}>
			<TouchableOpacity onPress={() => {playSound()}}>
				<Image
					source={require("../assets/images/play.png")}
					style={styles.audioButtons} 
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {pauseSound()}}>
				<Image
					source={require("../assets/images/pause.png")}
					style={styles.audioButtons} 
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
	audio: {
		flexDirection: "row",
		justifyContent: 'center',    
	},

	audioButtons: {
		width:80, 
		height:80,
	}
  });

export default AudioPlayer
