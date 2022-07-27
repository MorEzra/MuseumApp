import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity, Pressable} from 'react-native';

import { globalStyles } from '../assets/styles/global';

import { artPieces } from '../components/ArtPiece';
import { artPiecesCounterReference } from './Screen4_ArrivalInstructions';
import AudioPlayer from '../components/AudioPlayer';
//import { active } from './Screen1_WelcomeScreen';


export default function ArtPieces({navigation}) { 
  let artPiecesNames = artPieces.map(({name}) => name);
  let active = false;
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

  let show = true; //[show, setShow] = useState(false); //TODO: show if audio finished playing?

  let [attribute1BackgroundColor, setAttribute1BackgroundColor] = useState(attribute1DefaultBackgroundColor);
  let [attribute2BackgroundColor, setAttribute2BackgroundColor] = useState(attribute2DefaultBackgroundColor);
  let [attribute3BackgroundColor, setAttribute3BackgroundColor] = useState(attribute3DefaultBackgroundColor);

  let [chosenAttribute, setChosenAttribute] = useState(false);
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
          
          <AudioPlayer 
          soundfile={artPieces[artPiecesCounterReference-1].audio_explanation} 
          />
          <Text style={globalStyles.questionnaireHeader}>לחצו כדי לשמוע הסבר</Text>
          {
            artPiecesCounterReference != 8 ? (
            <View style={styles.attributesView}>
            {/* ------------------------------------------------ choices ------------------------------------------------ */}
            <Text style={{fontWeight:"bold", fontSize:33, marginBottom:10}}>{ChoicesText}</Text>  
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
            ) : null 
          }   
          <Button 
              title={buttonName}
              onPress={() => {
                if (!active || (chosenAttribute && active) || (active && artPiecesCounterReference == artPieces.length)) {                            
                  if (artPiecesCounterReference == artPieces.length) 
                    navigation.navigate("SummaryQuestionnaire1");
                    
                  else {                              
                    navigation.navigate("ArrivalInstructions");
                  }
                }
              }}>
          </Button>      
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
});

  
  