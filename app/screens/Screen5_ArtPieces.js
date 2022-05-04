import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable} from 'react-native';

import { artPiecesCounterReference } from './Screen4_ArrivalInstructions';
import AudioPlayer from '../components/AudioPlayer';

class ArtPiece {
  constructor(name, imageName, attributes, chosenAttributeIndex) {
    this.name = name;
    this.imageName = imageName;
    this.attributes = attributes;
    this.chosenAttributeIndex = chosenAttributeIndex;
    
  }
}


export default function ArtPieces({navigation}) { 
  
  let artPieces = [];
  artPieces.push(new ArtPiece("פרדריקה מריה בר של גוסטב קלימט (1916)", "pic1.png", ["attribute *", "attribute **", "attribute ***"], 0))
  artPieces.push(new ArtPiece("קייס ואן דונגן, נסיכת בבל (1904)",      "pic2.jpg", ["attribute *", "attribute **", "attribute ***"], 1))
  artPieces.push(new ArtPiece("סירה בנמל באנטרוורפן של ז'ורז' בראק"   ,"pic3.jpg", ["attribute *", "attribute **", "attribute ***"], 2))
  //artPieces.push(new ArtPiece("פרדריקה מריה בר של גוסטב קלימט (1916)", "pic1.png", ["attribute *", "attribute **", "attribute ***"], 0))    


  let active = false;
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
      <Text style = {styles.header}>{artPieces[artPiecesCounterReference - 1].name}</Text>

      {/* ------------------------------------------------ art piece ------------------------------------------------ */}
      <Image        
        source={require("../assets/images/" + artPieces[artPiecesCounterReference-1].imageName)}
        style={{ width: 400, height: 400, marginBottom:10}} 
      />
            
      {/* ------------------------------------------------ audio ------------------------------------------------ */}
      
      <AudioPlayer />


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
      marginBottom:15,         
    },

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline',
    },

    attributesView: {       
        marginTop:20,      
        borderColor: "black",      
        
    },    

    attributesText: {
      marginRight:20,
      fontSize:30,
      fontWeight: 'bold',
    },
});

  
  