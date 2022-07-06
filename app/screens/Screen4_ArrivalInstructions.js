import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../assets/styles/global';

import { artPieces } from '../components/ArtPiece';

export let artPiecesCounterReference = 0;
export default function ArrivalInstructions({navigation}) {  

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  let artPiecesNames = artPieces.map(({name}) => name);

  artPiecesCounterReference = artPiecesCounter;
  return (      
    <View style={[globalStyles.container, 

    ]}>
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
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>
            <Text
            style = {globalStyles.instructionsText}        
            >בהגיעך אל התמונה,{'\n'}אנא לחץ כאן{'\n'}על מנת לצלם אותה</Text>
          </View>   
        {/* ------------------------------------------------ piece ------------------------------------------------ */}
          <Image
              source={artPieces[Math.min(artPiecesCounter, artPieces.length - 1)].piece}
              style={{resizeMode: 'contain', width: 400, height: 400, marginBottom:25,  }}
          />
          </View>
        
        {/* NOTE: arrival button is redundant because the image is being verified. Is here temporary for debugging purposes  */}
        <Button 
            title="הגעתי"        
            onPress={() =>  {
                //artPiecesCounterReference = artPiecesCounterReference;  
                setArtPiecesCounter(artPiecesCounter+1);              
                navigation.navigate("ArtPieces")
              }
            }>
        </Button>  
        {/* Added some extra empty space at the bottom of the page to make the "הגעתי" button more accesible */}
        <View 
          style= {{height: 50}}>
            
        </View>
      </View>     
      <StatusBar hidden={false} />
    </View>
  );
}
