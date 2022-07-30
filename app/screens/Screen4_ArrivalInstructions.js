import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../assets/styles/global';

import { artPieces } from '../components/ArtPiece';
import { debugMode, tExperimentBegin } from './Screen1_WelcomeScreen';

export let artPiecesCounterReference = 0;
export let tFinishArrivalInstructionsArray = new Array(artPieces.length).fill(0);

export default function ArrivalInstructions({navigation}) {  

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  let artPiecesNames = artPieces.map(({name}) => name);

  artPiecesCounterReference = artPiecesCounter;
  return (      
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style = {globalStyles.header}>
          יצירה מספר {artPiecesCounter + 1}: {artPiecesNames[artPiecesCounter]}
        </Text>

          <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>

        
            <View style={
                {
                  flexDirection: "row",
                  alignItems: 'center'
                }
              }>         

            {/* -------------------------------------------------- map image -------------------------------------------------- */}

            <Image
                source={artPieces[Math.min(artPiecesCounter, artPieces.length - 1)].mapPath}
                style={{ width: 600, height: 350 }}
            />
          </View>
          {/* ------------------------------------------------ camera ------------------------------------------------ */}
          <View style={
              {
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'space-between',
              }
            }>
            <View style={
              {
                flexDirection: "column",
                alignItems: 'center',
              }
            }>
              <TouchableOpacity
              onPress={() => navigation.navigate("CameraScreen")}
              >
                <Image
                  source={require("../assets/images/buttons/camera.png")}
                  style={{ width: 80, height: 100 }}
                />
              </TouchableOpacity>
              <Text
              style = {globalStyles.instructionsText}        
              >בהגיעך אל התמונה,{'\n'}אנא לחץ כאן{'\n'}על מנת לצלם אותה</Text>
            </View>   
          {/* ------------------------------------------------ piece ------------------------------------------------ */}
            <Image
                source={artPieces[Math.min(artPiecesCounter, artPieces.length - 1)].piece}
                style={{resizeMode: 'contain', width: 380, height: 380, marginBottom:25,  }}
            />
          </View>
          {
            debugMode ? (
            <Button 
                title="הגעתי"        
                onPress={() =>  {
                    tFinishArrivalInstructionsArray[artPiecesCounter] = ((performance.now() - tExperimentBegin)/ 1000).toFixed(2)    ;
                    setArtPiecesCounter(artPiecesCounter+1);              
                    navigation.navigate("ArtPieces")
                  }
                }>
            </Button>  
            ) : null
          }
          {/* Added some extra empty space at the bottom of the page to make the "הגעתי" button more accesible */}
          <View 
            style= {{height: 50}}>
              
          </View>
        </View>     
        <StatusBar hidden={false} />
      </ScrollView>
    </View>
  );
}
