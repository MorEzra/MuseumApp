import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable} from 'react-native';
import ArtPiece from './ArtPiece';
import { artPieces } from './ArtPiece';

import { artPiecesCounterReference } from './Screen4_ArrivalInstructions';
import AudioPlayer from '../components/AudioPlayer';


export default function ArtPieces({navigation}) { 
  /*TODO: plug in real attributes later... */
  let artPiecesNames = artPieces.map(({name}) => name);
  let active = true;
  let buttonName = (active) ? "בחרתי" : "המשך";  
  
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
  return (      
    <View style={styles.container}>            
      <Text style = {styles.header}>יצירה מספר {artPiecesCounterReference}: {artPiecesNames[artPiecesCounterReference - 1]}</Text>     
      {/* ------------------------------------------------ audio ------------------------------------------------ */}
      
      <AudioPlayer />

      {/* ------------------------------------------------ art piece ------------------------------------------------ */}
      <Image        
        source={artPieces[artPiecesCounterReference-1].piece}
        style={{ resizeMode: 'contain', width: 400, height: 400, marginBottom:10 }} 
      />
            
      {/* ------------------------------------------------ choices ------------------------------------------------ */}
      <Text style={styles.text}>איזה מאפיין תרצו שיהיה ליצירה הבאה?</Text>  
      
      <View style={styles.attributesView}>
      {/* ------------------------------------------------ attribute1 ------------------------------------------------ */}
        <Pressable
          style={{backgroundColor:attribute1BackgroundColor, borderWidth:1, marginBottom:10}}
          onPress={() => {
                  if (active) {
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
      <Button 
          title={buttonName}
          onPress={() => {
            if (!active || (chosenAttribute && active)) {                            
              if (artPiecesCounterReference == artPieces.length) 
                navigation.navigate("SummaryQuestionnaire");
              else {                              
                navigation.navigate("ArrivalInstructions");
              }
            }
          }}>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}


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
      color: "dodgerblue",            
    },

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline'
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

  
  