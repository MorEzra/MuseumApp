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
    <View style={globalStyles.container}>
      <ScrollView>
        <View
         style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>

        <Text style = {globalStyles.header}>
          יצירה מספר {artPiecesCounter + 1}: {artPiecesNames[artPiecesCounter]}
        </Text>

        <View style={
            {
              flexDirection: "row",
            }
          }>
          {/* ------------------------------------------------ piece ------------------------------------------------ */}
          <Image
              source={artPieces[Math.min(artPiecesCounter, artPieces.length - 1)].piece}
              style={{resizeMode: 'contain', width: 400, height: 400, marginBottom:25, }}
          />

          

          {/* -------------------------------------------------- map image -------------------------------------------------- */}

          <Image
              source={artPieces[Math.min(artPiecesCounter, artPieces.length - 1)].mapPath}
              style={{ width: 650, height: 400 }}
          />
        </View>
        {/* ------------------------------------------------ camera ------------------------------------------------ */}
        <Text
        style = {globalStyles.instructionsText}        
        >בהגיעך אל התמונה, אנא צלם אותה</Text>    
        <TouchableOpacity
        onPress={() => navigation.navigate("CameraScreen")}
        >
          <Image
            source={require("../assets/images/buttons/camera.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>         

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
      </View>
      </ScrollView>        
      <StatusBar style="auto" />
    </View>
  );
}
