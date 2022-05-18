import React, { Component, memo, useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

  
const AudioPlayer = (props) =>{  
	const [sound, setSound] = React.useState();	  
	const [status, setStatus] = React.useState(false);	  
	async function playSound() {
		if(sound) {
			if(status) {
				console.log('Pausing');
				sound.pauseAsync();
				setStatus(false);
			} else {
				console.log('Playing Sound');
				setStatus(true);
				await sound.playAsync()
			}
		} else {
			console.log('Loading Sound');
			const { sound : sound} = await Audio.Sound.createAsync(
				require('../assets/audio/pictures_at_an_exhibition_mussorgsky.mp3')
			);
			
			setSound(sound);
			setStatus(true);
			await sound.playAsync()
		}
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
					source={require("../assets/images/playpause_button.png")}
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
		margin: 10  
	},

	audioButtons: {
		width:80, 
		height:80,
	}
  });

export default AudioPlayer
