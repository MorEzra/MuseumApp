import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../assets/styles/global';

import { artPieces } from '../components/ArtPiece';
import { debugMode, noPictureMode, tExperimentBegin } from './Screen1_WelcomeScreen';

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
              onPress={() => {
                setArtPiecesCounter(artPiecesCounter+1);
                if (!noPictureMode) {              
                navigation.navigate("CameraScreen")}
                else {navigation.navigate("ArtPieces")}
              }}
              >
                <Image
                  source={require("../assets/images/buttons/camera.png")}
                  style={{ width: 80, height: 100 }}
                />
              </TouchableOpacity>
              <Text
              style = {globalStyles.instructionsText}        
              >בהגיעכם אל התמונה,{'\n'}אנא לחצו כאן{'\n'}על מנת לצלם אותה</Text>
            </View>   
          {/* ------------------------------------------------ piece ------------------------------------------------ */}
            <Image
                source={artPieces[Math.min(artPiecesCounter, artPieces.length - 1)].piece}
                style={{resizeMode: 'contain', width: 380, height: 380, marginBottom:25,  }}
            />
          </View>
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
