import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Image, Pressable} from 'react-native';

import { globalStyles } from '../assets/styles/global';

import { artPieces } from '../components/ArtPiece';
import { artPiecesCounterReference } from './Screen4_ArrivalInstructions';
import { Audio } from 'expo-av';

import { tExperimentBegin } from './Screen1_WelcomeScreen';
import { debugMode, active } from './Screen1_WelcomeScreen';

import { artPiecesData } from './Screen4_ArrivalInstructions';

export let tFinishArtPiecesArray = new Array(artPieces.length).fill(0);

export default function ArtPieces({navigation}) { 
  let tBegin = new Date();
  artPiecesData[artPiecesCounterReference - 1].tBeginArtPiece = tBegin.getHours() + ":" + tBegin.getMinutes() + ":" + tBegin.getSeconds() + ":" + tBegin.getMilliseconds();
  // Multiple choice and art pieces
  let artPiecesNames = artPieces.map(({name}) => name);
  let buttonName = (active) ? "בחרתי" : "המשך";  
  let ChoicesText = (active) ? "איזה מאפיין תרצו שיהיה ליצירה הבאה?": "מאפיין היצירה הבאה באוסף יהיה:"

  let attribute1DefaultBackgroundColor = (active) ? "aliceblue" : "aliceblue";
  let attribute2DefaultBackgroundColor = (active) ? "white" : "white";
  let attribute3DefaultBackgroundColor = (active) ? "aliceblue" : "aliceblue";
  
  if (!active) {
    let passiveChosenAttribute = artPieces[artPiecesCounterReference - 1].chosenAttributeIndex
    switch (passiveChosenAttribute) {
      case 0:
        attribute1DefaultBackgroundColor = "dodgerblue"
        break;
      case 1:
        attribute2DefaultBackgroundColor = "dodgerblue"
        break;
      case 2:
        attribute3DefaultBackgroundColor = "dodgerblue"
        break;
    }
  }

  let [attribute1BackgroundColor, setAttribute1BackgroundColor] = useState(attribute1DefaultBackgroundColor);
  let [attribute2BackgroundColor, setAttribute2BackgroundColor] = useState(attribute2DefaultBackgroundColor);
  let [attribute3BackgroundColor, setAttribute3BackgroundColor] = useState(attribute3DefaultBackgroundColor);

  let [chosenAttribute, setChosenAttribute] = useState(false);

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
          let timer = new Date();
          artPiecesData[artPiecesCounterReference-1].tFinishAudio = timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds(); 
          setFinishedPlaying(true)
        }
			})
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
    <View style={globalStyles.container}>            
      <ScrollView>
        <View
          style= {
            {
              alignItems: 'center',
              justifyContent: 'center',    
            }
          }>        
          <Text style = {globalStyles.header}>יצירה מספר {artPiecesCounterReference}: {artPiecesNames[artPiecesCounterReference - 1]}</Text>     
          

          {/* ------------------------------------------------ art piece ------------------------------------------------ */}
          <Image        
            source={artPieces[artPiecesCounterReference-1].piece}
            style={{ resizeMode: 'contain', width: 400, height: 400, marginBottom:20 }} 
          />
          {/* ------------------------------------------------ audio ------------------------------------------------ */}
          {
          !finishedPlaying? (
            <View style={globalStyles.audio} >
              <Text style={globalStyles.questionnaireHeader}>לחצו כדי לשמוע הסבר</Text>
			        <TouchableOpacity onPress={
                () => {
                    let timer = new Date();
                    artPiecesData[artPiecesCounterReference-1].tPlayPauseAudio.push(timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds());
                    playSound(artPieces[artPiecesCounterReference-1].audio_explanation)
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
          {
            (artPiecesCounterReference != 8) && ((finishedPlaying && active) || debugMode) ? (
            <View style={styles.attributesView}>          
            {/* ------------------------------------------------ choices ------------------------------------------------ */}
            <Text style={{fontWeight:"bold", fontSize:33, marginBottom:10}}>{ChoicesText}</Text>  
            {/* ------------------------------------------------ attribute1 ------------------------------------------------ */}
              <Pressable
                style={{backgroundColor:attribute1BackgroundColor, borderWidth:1, marginBottom:10}}
                onPress={() => {
                        if (active) {
                          let timer = new Date();
                          artPiecesData[artPiecesCounterReference - 1].tAttributesChoices.push(timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds());
                          artPiecesData[artPiecesCounterReference-1].attributesChoices.push(artPieces[artPiecesCounterReference-1].attributes[0]);
                          setAttribute1BackgroundColor("dodgerblue");
                          setAttribute2BackgroundColor("white");
                          setAttribute3BackgroundColor("aliceblue");
                          setChosenAttribute(true);
                        }
                    }
                }>

                <Text style={styles.attributesText}>{artPieces[artPiecesCounterReference - 1].attributes[0]}</Text>            
              </Pressable>    
              
            {/* ------------------------------------------------ attribute2 ------------------------------------------------ */}
              <Pressable
                style={{backgroundColor:attribute2BackgroundColor, borderWidth:1, marginBottom:10}}
                onPress={() => {
                        if (active) {
                          let timer = new Date();
                          artPiecesData[artPiecesCounterReference - 1].tAttributesChoices.push(timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds());
                          artPiecesData[artPiecesCounterReference-1].attributesChoices.push(artPieces[artPiecesCounterReference-1].attributes[1]);
                          setAttribute1BackgroundColor("aliceblue");
                          setAttribute2BackgroundColor("dodgerblue");
                          setAttribute3BackgroundColor("aliceblue");
                          setChosenAttribute(true);              
                        }
                      }
                }>

                <Text style={styles.attributesText}>{artPieces[artPiecesCounterReference - 1].attributes[1]}</Text>            
              </Pressable>   

            {/* ------------------------------------------------ attribute3 ------------------------------------------------ */}
              <Pressable
                style={{backgroundColor:attribute3BackgroundColor, borderWidth:1, marginBottom:10}}
                onPress={() => {
                        if (active) {
                          let timer = new Date();
                          artPiecesData[artPiecesCounterReference - 1].tAttributesChoices.push(timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds());
                          artPiecesData[artPiecesCounterReference-1].attributesChoices.push(artPieces[artPiecesCounterReference-1].attributes[2]);
                          setAttribute1BackgroundColor("aliceblue");
                          setAttribute2BackgroundColor("white");
                          setAttribute3BackgroundColor("dodgerblue");
                          setChosenAttribute(true); 
                        }
                      }
                }>

                <Text style={styles.attributesText}>{artPieces[artPiecesCounterReference - 1].attributes[2]}</Text>            
            </Pressable>        

            </View> 
            )
             : null
          }
          {
            artPiecesCounterReference != 8 &&!active && finishedPlaying ?  (
              <View>                
                <Text style={styles.attributesText}>המאפיין של היצירה הבאה בסיור:</Text>
                <Text style={styles.chosenAttributesText}>- {artPieces[artPiecesCounterReference - 1].attributes[artPieces[artPiecesCounterReference - 1].chosenAttributeIndex]}</Text>
              </View>
            ) : null
          }

          {
          finishedPlaying || debugMode ? (
          <Button 
              title={buttonName}
              onPress={() => {
                tFinishArtPiecesArray[artPiecesCounterReference-1] = ((performance.now() - tExperimentBegin) / 1000).toFixed(2);
                if (!active || (chosenAttribute && active) || (active && artPiecesCounterReference == artPieces.length) || debugMode) {                                              
                  let tFinish = new Date();
                  artPiecesData[artPiecesCounterReference - 1].tFinishArtPiece = tFinish.getHours() + ":" + tFinish.getMinutes() + ":" + tFinish.getSeconds() + ":" + tFinish.getMilliseconds();
                  if (artPiecesCounterReference == artPieces.length) 
                    navigation.navigate("AdditionalQuestions_1");
                    
                  else {                              
                    navigation.navigate("ArrivalInstructions");
                  }
                }
              }}>
          </Button>      
          ) : null
          }
        </View>
      </ScrollView>
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

    chosenAttributesText: {
      marginRight:20,
      fontSize:20,
      fontWeight: 'bold',
      textAlign: 'right'
    },
});

  
  