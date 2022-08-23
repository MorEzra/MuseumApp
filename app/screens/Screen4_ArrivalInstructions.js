import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../assets/styles/global';

import { artPieces } from '../components/ArtPiece';
import { debugMode, noPictureMode } from './Screen1_WelcomeScreen';

class ArtPieceData {
  constructor() {
    this.artPieceName = "";
    this.tBeginArrivalInstructions = -1;
    this.tFinishArrivalInstructions = -1;
    this.tBeginCameraScreen = -1;
    this.tFinishCameraScreen = -1;
    this.tBeginArtPiece = -1;
    this.tPlayPauseAudio = [];
    this.tFinishAudio = -1;
    this.attributesChoices = [];
    this.tAttributesChoices = [];
    this.tFinishArtPiece = -1;
  }
}


export let artPiecesCounterReference = 0;
export let tFinishArrivalInstructionsArray = new Array(artPieces.length).fill(-1);
export let tBeginArrivalInstructionsArray = new Array(artPieces.length).fill(-1);
export let artPiecesData = [];

let englishArtPiecesNames = ["fredrica", "princess", "boat", "worms", "venezian woman", "horses", "ball", "portrait"]
for (let i=0; i<artPieces.length; i++) {
  let newArtPiece = new ArtPieceData();
  newArtPiece.artPieceName = englishArtPiecesNames[i];
  
  artPiecesData.push(newArtPiece);
}


export default function ArrivalInstructions({navigation}) {  
  let tBegin = new Date();
  

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  let artPiecesNames = artPieces.map(({name}) => name);

  artPiecesData[Math.min(artPiecesCounter, artPieces.length - 1)].tBeginArrivalInstructions = tBegin.getHours() + ":" + tBegin.getMinutes() + ":" + tBegin.getSeconds() + ":" + tBegin.getMilliseconds();

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
                let timer = new Date();
                artPiecesData[artPiecesCounter].tFinishArrivalInstructions = timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds();
                tFinishArrivalInstructionsArray[artPiecesCounter] = timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds() + ":" + timer.getMilliseconds();
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
