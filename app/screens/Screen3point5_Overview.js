import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { debugMode } from './Screen1_WelcomeScreen';
import { Audio } from 'expo-av';

export let tBeginSefiOverview  = -1;
export let tFinishSefiOverview = -1;
export let playPauseSefiExplanationAudio = [];
export default function OverviewScreen({navigation}) { 
  let tBegin = new Date();
  tBeginSefiOverview = tBegin.getHours() + ":" + tBegin.getMinutes() + ":" + tBegin.getSeconds() + ":" + tBegin.getMilliseconds();

  let audio_explanation = require("../assets/audio/instructions/overview.wav")


  // Audio 
  const [sound, setSound] = React.useState(undefined);	  
	const [status, setStatus] = React.useState(false);	
	const [finishedPlaying, setFinishedPlaying] = useState(false);	


	async function playSound(soundfile) {
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
				soundfile
			);
			
			setSound(sound);
			setStatus(true);
			
			await sound.playAsync();
			sound.setOnPlaybackStatusUpdate((playbackStatus) => {
				if (!playbackStatus.didJustFinish) {
          console.log(playbackStatus.positionMillis)
          }
          else {
            console.log('finished');
            setFinishedPlaying(true)
          }
		    })
	}}

	React.useEffect(() => {
		return sound
			? () => {
				console.log('Unloading Sound');
				sound.unloadAsync(); }
		: undefined;
	}, [sound]);


  return (      
    <View style={globalStyles.container}>
        <Text style = {globalStyles.header}>ברוכים הבאים לסיור באוסף מיזנה בלומנטל</Text>     
        <View
          style= {
            {
              flex: 1,
              flexDirection: "column",
              alignItems: 'center',
                 
            }
          }>
          <View style={
            {
              flexBasis: 100,
              flexGrow: 0.01,
              flexShrink: 0
            }
          }>
            {/* Just some padding */}
            </View>      
          
          <View style={[{ alignItems: 'center'},
            {
              flexBasis: 100,
              flexGrow: 0.79,
              flexShrink: 1,
            }]  
          }>
          <Image        
            source={require("../assets/images/Sefi.png")}
            style={{ resizeMode: 'contain', width: 200, height: 200}} 
          />
          <Text style={globalStyles.questionnaireHeader} >דוקטור ספי הנדלר הסטוריון אומנות</Text>

          </View>

          <View style={
            {
              flexBasis: 100,
              flexGrow: 0.4,
              flexShrink: 0
            }
          }>
            {
          !finishedPlaying? (
            <View style={globalStyles.audio} >
              <TouchableOpacity onPress={() => {
                  let timer = new Date();
                  playPauseSefiExplanationAudio.push(timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds());
                  playSound(audio_explanation)
                }
              }>
                <Image
                  source={require("../assets/images/buttons/playpause_button.png")}
                  style={globalStyles.audioButtons} 
                />
			        </TouchableOpacity>
		        </View>
          ) : null
            }
          </View>
          {finishedPlaying || debugMode? (
            <View style={
              {
                flexBasis: 100,
                flexGrow: 0.01,
                flexShrink: 0
              }
            }>
              <View style={globalStyles.buttonView}>
                <TouchableOpacity 
                onPress={() => {
                      let finishTimer = new Date();
                      tFinishSefiOverview = finishTimer.getHours() + ":" + finishTimer.getMinutes() + ":" + finishTimer.getSeconds() + ":" + finishTimer.getMilliseconds();
                      navigation.navigate("ArrivalInstructions")
                    }
                  }>
                  <Text style={globalStyles.buttonText}>המשך</Text>
                </TouchableOpacity>
              </View>

            </View>
          ) : null
          }
        </View>

        

        
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    text: {
        fontWeight:'bold',
        fontSize:30,
        marginBottom:25,
        textDecorationLine: 'underline',
        textAlign: "right"
    },

    attributesView: {       
        marginTop:20,      
        borderColor: "black",      
        
    },    

    attributesText: {
      marginRight:20,
      fontSize:30,
      fontWeight: 'bold',
      textAlign: 'right'
    },
});

  
  